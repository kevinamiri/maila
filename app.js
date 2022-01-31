#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
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

// const LanguageLists = ['bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'hu', 'it', 'ja', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'zh'];
const LanguageLists = ['sv', 'en'];

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
        await updateJsonFileWithObject('./src/data/articles/articles.json', returnedPosto)
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
    const getArticles = await getJsonObject('./src/data/articles/articles.json')
    const lastId = getArticles.length + 1
    // one, two, three => ["one","two","three tags"]
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
    return writeTextToFile(`./src/pages/${folder}/`, `${slug}.${lang}.md`, stringdata)
}


const createPost = async () => {
    const tagsList = `copywriting tips`
    const postTitleStr = `Art of Writing Engaging Copy`
    const postUrl = kebabCase(postTitleStr)
    const year = new Date().toISOString().slice(0, 4)
    const month = new Date().toISOString().slice(5, 7)
    const folderDir = `blog/${year}/${month}`
    const dateString = new Date().toISOString().slice(0, 10)
    const imageNameString = "terms.png"
    const postDescriptionStr = `In this article, we’ll share some tips for writing effective copy that engages your audience and drives results.`
    //     const postBody = `

    // ## Art of Writing Engaging Copy

    // Copywriting is an essential skill for any marketer. By writing effective copy, you can persuade people to take action, whether that’s clicking a link, signing up for a newsletter, or making a purchase.

    // But what makes good copywriting? And how can you make sure your copy is engaging and drives results?

    // ### 1. Start with a strong headline

    // Creating an attention-grabbing headline is essential for getting your readers to stick around and learn more about what you have to say. The best headlines are clear headlines, they also can make a promise, such as “Get More Traffic in Less Time” or “Lose Weight in Just Two Weeks.”


    // ### 2. Use short, powerful sentences

    // People are busy and don't have time to read long paragraphs. Keep your sentences short and concise to make your content easier to read and more likely to be remembered. In addition, this will make it easier for people to share your content with others.
    // Your content should be easy to read and understand. Use clear and concise language, and avoid using complex terms or jargon, You can use our services to create and rephrase your content based on your brand tone and voice.

    // ### 3. Use images and videos

    // People are visual creatures, so it’s important to use strong visuals to support your content. This could include images, infographics, or videos. Eye-catching visuals will help keep your reader engaged and make your content more memorable.
    // Images and videos are a great way to break up your content and keep people engaged. They also help to illustrate your points and make your content more memorable.

    // ### 4. Use lists

    // Lists are an easy way to organize your content and make it more accessible. People are more likely to read a list than a long block of text. So make sure to use lists to break up your content and make it more readable.

    // ### 5. Make your introduction catchy

    // When you're writing an introduction, it's important to think about what will capture your reader's attention. You can do this by highlighting the benefits of your product or service, or by sharing a story that's relevant to your topic.

    // ### 6. Use powerful quotes

    // Quotes are a great way to add authority to your content and make it more persuasive. They also help break up the text and make it easier to read. Make sure to choose quotes that are relevant to your topic and will resonate with your audience.

    // ### 7. End with a call to action

    // Your copy should make a strong case for why people should take action. Why should they click that link, sign up for your newsletter, or make a purchase? What’s in it for them?
    // Your content should always include a call to action. This is your opportunity to prompt your reader to take the next step, whether that’s signing up for a free trial, downloading a white paper, or making a purchase.

    // ### 8. Test and optimize your copy

    // Copywriting is an art, but keep in mind that science can help to measure the quality of your company on a large scale. You need to test and optimize your copy to see what works best. Try different headlines, calls to action, and wording to see what gets the best results.

    //     `
    const postBody = "this is a test post"
    const allpassage = postBody.split('\n')
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
    processing('./src/data/articles/articles.json', `${folderDir}/${postUrl}`)
}
createPost()

// processing('./ssss.json', "book")

// const passage = `
// one of the most important things to do when you are starting to work with data is to look at the data.
// The first thing to do when you look at the data is to try to get a feel for the range of values in each column.
// `
// deeplTranslation(passage, 'sv')

// console.log(languageUrl("book"))