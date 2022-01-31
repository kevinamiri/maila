import React from "react";

export const getTheTextValueOfTheEditor = (editorValue) => {
  const arrofTexts = [];
  const ParagraphesorNodes = editorValue
    .map((x) => x)
    .map((x) => x.children[0]);
  for (let i = 0; i < ParagraphesorNodes.length; i++) {
    const element = ParagraphesorNodes[i];
    arrofTexts.push(element.text);
  }
  return arrofTexts.join("");
};

//Just Google translate
export const searchTranslatedGoogleModel011 = async (
  word: string,
  target: string
) => {
  const theUrl = `https://5uxfupz0gf.execute-api.eu-west-1.amazonaws.com/dev/product-description`;
  const params = {};
  params["query"] = word;
  params["finalLang"] = target;
  params["betweenLang"] = "fr";
  params["firstLang"] = "auto";
  const data = JSON.stringify(params);
  await fetch(theUrl, {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
    method: "POST",
    body: data,
  });
};
