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
        body: `auth_key=d6f7b394-b1ae-60f0-3937-3ab013c0faba:fx&text=${text}&target_lang=${target}`
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.translations[0].text
};


//list of all files in an array
// const getAllFiles = (path) => {
//     const files = [];
//     const directories = getAllDirectory(path);
//     directories.forEach((directory) => {
//         const directoryFiles = fs.readdirSync(directory);
//         directoryFiles.forEach((file) => {
//             const filePath = directory + '/' + file;
//             const stat = fs.statSync(filePath);
//             if (stat.isFile()) {
//                 files.push(filePath);
//             }
//         });
//     });
//     return files;
// };

const LanguageLists = ['bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'hu', 'it', 'ja', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'zh'];
// const LanguageLists = ['sv', 'en', 'no', 'fi', 'da'];

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

const addTemplate = async (title, description, folder, slug, lang, tags, date, passage, imageName, showImage = false) => {
    const getArticles = await getJsonObject('../src/data/articles/articles.json')
    const lastId = getArticles.length + 1
    const tagsr = tags.split(',').map(function (item) {
        element = item.trim()
        return `"${element}"`
    })
    const stringdata = `---
id: "${lastId}"
title: "${title}"
description: "${description}"
template: blog-post
templateKey: blog-post
author: 'Kevin Levin'
date: "${date}"
slug: /${lang}/${folder}/${slug}
path: /${lang}/${folder}/${slug}
lang: ${lang}
tags: [${tagsr}]
image: ../images/${imageName}
imageStatus: ${showImage}
---
${passage}
`
    return writeTextToFile(`../src/pages/${folder}/`, `${slug}.${lang}.md`, stringdata)
}


const createPost = async () => {
    const tagsList = `AIDA copywriting formula`
    const postTitleStr = `Machine learning algorithms can help create targeted content`
    const postUrl = kebabCase(postTitleStr)
    const dateString = new Date().toISOString().slice(0, 10)
    const year = new Date().toISOString().slice(0, 4)
    const month = new Date().toISOString().slice(5, 7)
    const folderDir = `blog/${year}/${month}`
    // const folderDir = `blog`
    const imageNameString = "terms.jpg"
    const postDescriptionStr = `Machine learning algorithms can be used to analyze and learn from large data sets in order to identify patterns. This can then be used to create content that is targeted at specific audiences based on their interests. By using machine learning, businesses can create content that is more relevant to their customers and that will help to increase sales.`
    const NewDocument = fs.readFileSync('./newDoc.md', 'utf8');
    const allpassage = NewDocument.split('\n')
    for (let index = 0; index < LanguageLists.length; index++) {
        const lang = LanguageLists[index];
        const postDescription = await deeplTranslation(postDescriptionStr, lang)
        const postTitle = await deeplTranslation(postTitleStr, lang)
        const allpassages = []
        for (let index = 0; index < allpassage.length; index++) {
            const paragraph = allpassage[index];
            const translatedP = await deeplTranslation(paragraph, lang)
            allpassages.push(translatedP)
        }
        const passage = allpassages.join('\n')

        await addTemplate(postTitle, postDescription, folderDir, postUrl, lang, tagsList, dateString, passage, imageNameString)

    }
    processing('../src/data/articles/articles.json', `${folderDir}/${postUrl}`)
}
createPost()

