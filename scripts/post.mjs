import { join, parse } from 'path'
import { config } from 'dotenv'
import OpenAI from 'openai'
import { optimalMdChunking, getNthContent, read, write, append } from './utils.mjs'
import { sysPrompt } from './translate-prompt.mjs'

config()


const eu = ['bg', 'hr', 'cs', 'da', 'nl', 'en', 'et', 'fi', 'fr', 'de', 'el', 'hu', 'ga', 'it', 'lv', 'lt', 'mt', 'pl', 'pt', 'ro', 'sk', 'sl', 'es', 'sv', 'no']

const nordic = ['da', 'sv', 'no', 'fi', 'is']
const majorLanguages = [
  'en', // English
  'zh', // Chinese
  'es', // Spanish
  'de', // German
  'ja', // Japanese
  'fr', // French
  'pt', // Portuguese
  'ko', // Korean
  'ar', // Arabic
  'it', // Italian
  'hi', // Hindi
  'id', // Indonesian
  'vi', // Vietnamese
  'tr', // Turkish
  'th', // Thai
  'pl', // Polish
  'sv', // Swedish
  'no', // Norwegian
  'da', // Danish
  'fi', // Finnish
  'nl', // Dutch
  'ru', // Russian
  'cs', // Czech
  'ha'  // Hausa
]

const MODELS = ['o4-mini', 'gpt-4.5-preview-2025-02-27']

const CHAT_MODEL = MODELS[0]


const TEMPERATURE = CHAT_MODEL === 'o4-mini' ? 1: 0.88

const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
 

async function translateChunk(text, lang = 'en') {
  const messages = [
    { role: 'system', content: sysPrompt },
    { role: 'user', content: `Translate to ${lang}:\n\n<text>${text}</text>\n\nplease place your work inside a <translation> xml tag for clarity.` },
  ]

  const res = await ai.chat.completions.create({
    model: CHAT_MODEL,
    messages,
    temperature: TEMPERATURE,
    store: true,
  })

  const content = res.choices?.[0].message?.content ?? text
  return getNthContent(content, 'translation', 1) || content.trim()
}

export async function translateFile(filePath, lang = 'en', outDir, outName) {
  console.log(`Translating ${filePath} → ${lang}`)
  const md = await read(filePath)
  const sections = optimalMdChunking(md, 4000)
  const { dir, name, ext } = parse(filePath)

  const outputDir = outDir || dir
  const outputName = outName || `${name}.${lang}`
  const outPath = join(outputDir, `${outputName}${ext}`)

  await write(outPath, '')

  for (const section of sections) {
    const result = await translateChunk(section, lang)
    await append(outPath, result + '')
  }

  console.log(`Saved → ${outPath}`)
}

async function translateToMultipleLanguages(config) {
  const { inputFile, outputPath, languages, nameTemplate } = config
  const { name, ext } = parse(inputFile)
  
  // Strip any existing language code from the name (e.g., "follow-up-email.en" -> "follow-up-email")
  const baseName = name.replace(/\.[a-z]{2}$/, '')
  
  console.log(`Starting translation of ${inputFile} to ${languages.length} languages`)
  
  // --- Parallel translation using Promise.all ---
  await Promise.all(
    languages.map(lang => {
      const outputName = nameTemplate 
        ? nameTemplate.replace('{lang}', lang).replace('{name}', baseName)
        : `${baseName}.${lang}`
      return translateFile(inputFile, lang, outputPath, outputName)
    })
  )
  
  console.log(`Completed translations to: ${languages.join(', ')}`)
}

;(async () => {
  await translateToMultipleLanguages({
    inputFile: '/home/kevin/maila/src/pages/legal/privacy-policy.en.md',
    outputPath: '/home/kevin/maila/src/pages/legal',
    languages: majorLanguages,
    nameTemplate: '{name}.{lang}'
  })

  // after done we need to format it using prettier prettier --write "src/pages/**/*.md"
  await exec(`prettier --write "/home/kevin/maila/src/pages/legal/*.md"`)
})()