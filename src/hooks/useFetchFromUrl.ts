import React from "react";
import { Auth } from "aws-amplify";

const useFetchFromUrl = async (urlType: string, fieldValues: any) => {
  try {
    const theUrl = `https://api.maila.ai/generate`;
    const params = {};
    const user = await Auth.currentAuthenticatedUser();
    params["username"] = user.username;
    fieldValues.loadFromUrl
      ? (params["company"] = fieldValues.loadFromUrl)
      : null;
    fieldValues.loadFromUrl ? (params["url"] = fieldValues.loadFromUrl) : null;
    fieldValues.loadFromUrl
      ? (params["query"] = fieldValues.loadFromUrl)
      : null;
    params["finalLang"] = fieldValues.language.LangCode;
    urlType ? (params["type"] = urlType) : null;
    const data = JSON.stringify(params);
    const response = await fetch(theUrl, {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      method: "POST",
      body: data,
    });
    const res = response.json();
    let rerurningData = res;
    return rerurningData;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default useFetchFromUrl;
