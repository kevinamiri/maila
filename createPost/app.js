#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const fetch = require("node-fetch");
const kebabCase = str => str.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
    .filter(Boolean)
    .map(x => x.toLowerCase())
    .join('-')

const deeplTranslation = async (text, target) => {
    const url = `https://api-free.deepl.com/v2/translate`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(text)
        },
        body: `auth_key=838317c3-e303-25f8-8f0b-fa55c70014c5:fx&text=${text}&target_lang=${target}`
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.translations[0].text
};


const googleTranslate = async (text, target) => {
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
        "query": text,
        "finalLang": target,
    });

    const options = {
        method: "POST",
        body: bodyContent,
        headers: headersList
    }
    const url = "https://yb7ei8rv0f.execute-api.us-east-2.amazonaws.com/prod/translation"
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('data', data)
    return data
}


const enSV = function (enText, target) {
    const prompt = `
1. EN => SV
---
1. EN
Settings
---
1. SV
Inställningar
---


2. EN => SV
---
2. EN
- The rose is an ancient symbol of love and beauty.
---
2. SV
- Rosen är en gammal symbol för kärlek och skönhet.
---


3. EN => ${target}
---
3. EN
${enText}
---
3. ${target}
`;

    return prompt;
};

/**
 * 
 * @param {String} param 
 * @param {String} targetLanguage 
 * @returns text in target language
 */
const translateLanguageCodex = async (
    param,
    targetLanguage
) => {
    const targetLang = targetLanguage.toUpperCase();
    const prompt = enSV(param, targetLang);
    const maxTokens_ = Math.floor(param.length * 1 / 2)
    let bodys = {
        prompt,
        top_p: 1,
        max_tokens: maxTokens_,
        temperature: 0.5,
        presence_penalty: 0.0,
        frequency_penalty: 0.0,
        n: 1,
        stop: ["---"],
    };
    const url = `https://api.openai.com/v1/engines/code-davinci-002/completions`;
    try {
        let tokenOpenAi = "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";
        // await delay(3000)
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenOpenAi}`,
            },
            body: JSON.stringify(bodys),
            method: "POST",
        });
        const body = await response.json();
        console.log(body)
        const data = body.choices[0].text;
        return data;
    } catch (error) {
        console.log(error);
    }
};


// const openTranslations = async (text, target) => {
//     let bodys = {
//         query: text,
//         finalLang: target,
//         type: 50,
//         temperature: 50,
//     };
//     const response = await fetch("https://api.maila.ai/generate", {
//         headers: {
//             "authorization": "Bearer eyJraWQiOiJIcHE3SzZ4U3ZMNXpNZnlQSVRtbFZJYXJydHJ6K3ZNU2ZtVTV6QlZqcEpBPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiWU5vRFRFX0RQdXlKdERVNGt3b21VUSIsInN1YiI6IjA5ZThmYWZjLWVjNzUtNDE2Ni1hODcxLTgyZjA3ZjQzMmUxOCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9lVWtISklEUEUiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiMDllOGZhZmMtZWM3NS00MTY2LWE4NzEtODJmMDdmNDMyZTE4Iiwib3JpZ2luX2p0aSI6ImY4ZjA5MzBhLThkNWUtNDc3NS1iOWQ1LWQxM2M4MjkyZGI3NCIsImF1ZCI6IjNnbGxpNzE3cDE1b24yMXZrOTQyMm5oOTFuIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA0NTk2ODE3NTM0MDk2MzczMTQxIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoiZmFsc2UiLCJkYXRlQ3JlYXRlZCI6IjE2NDQwNTI0Njg3MDcifV0sInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjUxMjQ1Mjk4LCJleHAiOjE2NTIzNzU1MzgsImlhdCI6MTY1MjM3MTkzOCwianRpIjoiZGIzNzlkYmUtYjg3MS00OWUxLTkwYjEtZjY2ZDM3NjAwYzExIiwiZW1haWwiOiJrZXZpbkBtYWlsYS5haSJ9.wr7n35OhH0GEbUEain92u3ew58rX1JBowo05P6K8ncu_p6QRRzmxv43r-Y2jhelaXhoUIIHSljfsutGOOiy5eWHtmyqwsPG-C_SNXRN0W1wIiM9NzKiVNu6tkbvUUSMQIVNKAgEAsX3n1di3AfO0gSRpjpL5G2pEISRh-tATBIGUqfajRmUWOsYyO714xrAsX_VCPwcaNtTPVrVt0gcJyYbtBXX3QkcuDTVIy5fVZ7jiJ5Gc6qhfTW5T9auY9WJYPZWMbSfhsmCfMtvEczBSSdEdMxWMzEiKg3Dt7pTtfr44JcfTzaqs_X_rBiCZhLw1A4ZKWOraFLkcYW-bM3AYrQ",
//         },
//         body: JSON.stringify(bodys),
//         method: "POST",
//     });
//     const data = await response.json();
//     return data.text1
// };



//list of all files in an array
const getAllFiles = (path) => {
    const files = [];
    const directories = getAllDirectory(path);
    directories.forEach((directory) => {
        const directoryFiles = fs.readdirSync(directory);
        directoryFiles.forEach((file) => {
            const filePath = directory + '/' + file;
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
                files.push(filePath);
            }
        });
    });
    return files;
};

// const LanguageLists = ['bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'hu', 'it', 'ja', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'zh'];


const LanguageLists = ['sv', 'en', 'fi', 'da', 'no'];

const languageUrl = (url) => {
    langLists = {}
    LanguageLists.map(x => {
        langLists[`${x}`] = url
    })
    return langLists
}

// function that get the json file path and return the the javascript object
const getJsonObject = async (path) => {
    const jsonFile = fs.readFileSync(path, 'utf8');
    const { title, articles } = JSON.parse(jsonFile);
    return articles
};


const updateJsonFileWithObject = async (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

const processing = async (pathArticles, url) => {
    try {
        const getJson = await getJsonObject(pathArticles)
        const PostsLength = getJson.length + 1
        const languages = languageUrl(url)
        let returnedPost = JSON.parse(JSON.stringify(getJson));
        returnedPost.push({ id: PostsLength.toString(), ...languages })
        const returnedPosto = {}
        returnedPosto['title'] = "home"
        returnedPosto['articles'] = returnedPost
        await updateJsonFileWithObject('../src/data/articles/articles.json', returnedPosto)
        console.log('processing... articles.json')
    } catch (error) {
        console.log(error)
    }

}

const writeTextToFile = (path, filename, text) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    fs.writeFileSync(path + `/${filename}`, text);
}

const addTemplate = async (post) => {
    const getArticles = await getJsonObject('../src/data/articles/articles.json')
    const lastId = getArticles.length + 1
    const stringdata = `---
id: "${lastId}"
title: "${post.title}"
description: "${post.description}"
template: blog-body
templateKey: blog-body
author: 'Kevin Levin'
date: "${post.date}"
slug: /${post.lang}/${post.folder}/${post.slug}
path: /${post.lang}/${post.folder}/${post.slug}
lang: ${post.lang}
tags: [${post.tags.join(',')}]
image: ../images/${post.imageName}
imageStatus: ${post.showImage}
---
${post.passage}
`
    return writeTextToFile(`../src/pages/${post.folder}/`, `${post.slug}.${post.lang}.md`, stringdata)
}


const createPost = async () => {
    const postSubject = "Advice strategies for getting people to reply to your emails"
    const postMetaDescription = `Don’t send long e-mails to people you want to work with. Just put your point across as quickly as possible and keep it short.`
    const tagStrs = `communication, writing, tips`
    const imageNameString = "emails-hey.jpg"
    const NewDocument = fs.readFileSync('./newDoc.md', 'utf8');
    const postUrl = kebabCase(postSubject)
    const dateString = new Date().toISOString().slice(0, 10)
    const year = new Date().toISOString().slice(0, 4)
    const month = new Date().toISOString().slice(5, 7)
    const folderDir = `blog/${year}/${month}`
    const allpassage = NewDocument.split('\n\n|\n\n\n|\n\n\n\n')
    for (let index = 0; index < LanguageLists.length; index++) {
        const lang = LanguageLists[index];
        const postTitle = await googleTranslate(postSubject, lang)
        console.log(postTitle)
        const postDescription = await googleTranslate(postMetaDescription, lang)
        const tagsList = await googleTranslate(tagStrs, lang)
        const tags = tagsList.split(',')
        console.log('postTitle', postTitle)
        const allpassages = []
        for (let index = 0; index < allpassage.length; index++) {
            const paragraph = allpassage[index];
            const translatedP = await translateLanguageCodex(paragraph, lang)
            allpassages.push(translatedP)
        }
        const passage = allpassages.join('\n\n')

        const post = {
            title: postTitle,
            description: postDescription,
            folder: folderDir,
            slug: postUrl,
            lang: lang,
            tags: tags,
            date: dateString,
            passage: passage,
            imageName: imageNameString,
            showImage: true
        }

        await addTemplate(post)

    }
    processing('../src/data/articles/articles.json', `${folderDir}/${postUrl}`)
}
createPost()

