import fs from 'fs/promises'
import { Lexer } from 'marked'

export async function read(path) {
  return fs.readFile(path, 'utf8')
}

export async function write(path, data) {
  await fs.writeFile(path, data, 'utf8')
}

export async function append(path, data) {
  await fs.appendFile(path, data, 'utf8')
}


export function getNthContent(xml, tag, n = 1) {
  let count = 0
  let openPos = []

  for (let i = 0; i < xml.length; i++) {
    if (xml.slice(i, i + tag.length + 1) === `<${tag}`) {
      openPos.push(i)
      i += tag.length + 1
    } else if (xml.slice(i, i + tag.length + 3) === `</${tag}>`) {
      if (openPos.length > 0) {
        count++
        if (count === n) {
          const lastOpen = openPos[openPos.length - 1]
          return xml.slice(lastOpen + tag.length + 2, i)
        }
      }
      openPos = []
      i += tag.length + 2
    }
  }
  return null
}

export function optimalMdChunking(md, maxLen = 300) {
  const tokens = Lexer.lex(md)
  const lines = md.split(/\r?\n/).map(l => l + '\n')

  const elements = []
  let offset = 0
  for (const token of tokens) {
    let raw = ''
    while (offset < lines.length) {
      raw += lines[offset++]
      if (raw.trim() === '' || raw.endsWith('\n\n') || raw.split('\n').length > 2) break
    }
    elements.push({ type: token.type, raw, len: raw.length })
  }

  const n = elements.length
  const dp = Array(n + 1).fill(Infinity)
  const parent = Array(n + 1).fill(0)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    let currLen = 0
    for (let j = i - 1; j >= 0; j--) {
      const { type, raw, len } = elements[j]
      if (type === 'yaml') {
        if (currLen === 0 && dp[j] + 1 < dp[i]) {
          dp[i] = dp[j] + 1
          parent[i] = j
        }
        break
      }
      if (type === 'code' && currLen > 0) break
      currLen += len
      if (currLen <= maxLen && dp[j] + 1 < dp[i]) {
        dp[i] = dp[j] + 1
        parent[i] = j
      }
    }
  }

  const chunks = []
  let i = n
  while (i > 0) {
    const j = parent[i]
    const chunk = elements.slice(j, i).flatMap(({ type, raw }) =>
      type === 'code' && raw.length > maxLen ? splitCodeBlock(raw, maxLen) : [raw]
    )
    chunks.push(chunk.join(''))
    i = j
  }

  return chunks.reverse()
}

function splitCodeBlock(block, maxLen) {
  const lines = block.split('\n')
  const fence = lines[0]
  const close = lines[lines.length - 1]
  const content = lines.slice(1, -1)

  const result = []
  let curr = [fence]
  let len = fence.length + 1

  for (const line of content) {
    const lineLen = line.length + 1
    if (len + lineLen + close.length > maxLen) {
      curr.push(close)
      result.push(curr.join('\n'))
      curr = [fence]
      len = fence.length + 1
    }
    curr.push(line)
    len += lineLen
  }

  curr.push(close)
  result.push(curr.join('\n'))
  return result
}