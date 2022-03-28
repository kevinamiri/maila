#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
var { graphql, buildSchema } = require("graphql");
var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

const fetch = require("node-fetch");
const kebabCase = (str) =>
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
        .filter(Boolean)
        .map((x) => x.toLowerCase())
        .join("-");

const deeplTranslation = async (text, target) => {
    const url = `https://api-free.deepl.com/v2/translate`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": Buffer.byteLength(text),
        },
        body: `auth_key=d6f7b394-b1ae-60f0-3937-3ab013c0faba:fx&text=${text}&target_lang=${target}`,
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.translations[0].text;
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
const LanguageLists = ["sv", "en"];

const languageUrl = (url) => {
    langLists = {};
    LanguageLists.map((x) => {
        langLists[`${x}`] = url;
    });
    return langLists;
};

// function that get the json file path and return the the javascript object
const getJsonObject = async (path) => {
    const jsonFile = fs.readFileSync(path, "utf8");
    const { title, articles } = JSON.parse(jsonFile);
    return articles;
};

const updateJsonFileWithObject = async (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const processing = async (pathArticles, url) => {
    try {
        const getJson = await getJsonObject(pathArticles);
        const PostsLength = getJson.length + 1;
        const languages = languageUrl(url);
        let returnedPost = JSON.parse(JSON.stringify(getJson));
        returnedPost.push({ id: PostsLength.toString(), ...languages });
        const returnedPosto = {};
        returnedPosto["title"] = "home";
        returnedPosto["articles"] = returnedPost;
        await updateJsonFileWithObject(
            "./src/data/articles/articles.json",
            returnedPosto
        );
        console.log("processing... articles.json");
    } catch (error) {
        console.log(error);
    }
};

const writeTextToFile = (path, filename, text) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    fs.writeFileSync(path + `/${filename}`, text);
};


const addTemplate = async (title, description, folder, slug, lang, tags, date, helpHint, header, jsonId, url) => {
    // const getArticles = await getJsonObject('./src/data/articles/articles.json')
    // const lastId = getArticles.length + 1
    const tagsr = tags.split(',').map(function (item) {
        element = item.trim()
        return `"${element}"`
    })
    const stringdata = `---
id: "${jsonId}"
title: "${title}"
description: "${description}"
date: "${date}"
slug: /${lang}/${folder}/${slug}
lang: ${lang}
tags: [${tagsr}]
helpHint: "${helpHint}"
header: "${header}"
jsonId: ${jsonId}
url: ${url}
---

`
    return writeTextToFile(`./src/pages/${folder}/`, `${slug}.${lang}.mdx`, stringdata)
}


// const createPost = async () => {
//     const dateString = new Date().toISOString().slice(0, 10)
//     const year = new Date().toISOString().slice(0, 4)
//     const month = new Date().toISOString().slice(5, 7)
//     const folderDir = `blog/${year}/${month}`
//     const allpassage = NewDocument.split('\n')
//     for (let index = 0; index < LanguageLists.length; index++) {
//         const lang = LanguageLists[index];
//         const postDescription = await deeplTranslation(postDescriptionStr, lang)
//         const postTitle = await deeplTranslation(postTitleStr, lang)
//         const allpassages = []
//         for (let index = 0; index < allpassage.length; index++) {
//             const paragraph = allpassage[index];
//             const translatedP = await deeplTranslation(paragraph, lang)
//             allpassages.push(translatedP)
//         }
//         const passage = allpassages.join('\n')

//         await addTemplate(postTitle, postDescription, folderDir, postUrl, lang, tagsList, dateString, passage, imageNameString)

//     }
//     processing('../src/data/articles/articles.json', `${folderDir}/${postUrl}`)
// }

const handlar = async () => {
    const data = await fetch("http://auth.hostdu.com:8000/__graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: `{
            allEnJson {
              edges {
                node {
                  description
                  header
                  helpHint
                  id
                  jsonId
                  status
                  tag
                  tagId
                  title
                  url
                }
              }
            }
          }`,
        }),
    })
        .then((r) => r.json())
        .then((data) => data.data.allEnJson.edges);
    const frontmatter = data.map((data) => data.node)
    console.log(frontmatter)
    for (let i = 0; i < frontmatter.length; i++) {
        const tool = frontmatter[i];
        await addTemplate(tool.title, tool.description, 'tools', kebabCase(tool.title), "en", tool.tag, new Date().toISOString().slice(0, 10), tool.helpHint, tool.header, tool.jsonId, tool.url)
        // processing('./src/data/articles/articles.json', `tools/${kebabCase(tool.title)}`)
    }
};
handlar();
