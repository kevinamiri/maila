import React from "react";
import { Auth } from "aws-amplify";

const useFetchSuffix = async (
  parameters: string,
  suffix: string,
  gtoken: string,
  url: string,
  fieldValues: any
) => {
  try {
    const urlType = url;
    const element = `${parameters}`;
    const theUrl = `https://api.maila.ai/generate`;
    const params = {};
    const ListVoices = fieldValues.defaultVoice.map((x) => x.tone);
    const selectedVoices = ListVoices.join(",");
    params["query"] = element;
    params["suffix"] = suffix;
    params["finalLang"] = fieldValues.language.LangCode;
    params["grecaptcharesponse"] = gtoken;
    fieldValues.maxTokens
      ? (params["maxTokens"] = fieldValues.maxTokens)
      : null;
    fieldValues.presencePenalty
      ? (params["presencePenalty"] = fieldValues.presencePenalty)
      : null;
    fieldValues.temperature
      ? (params["temperature"] = fieldValues.temperature)
      : null;
    fieldValues.frequencyPenalty
      ? (params["frequencyPenalty"] = fieldValues.frequencyPenalty)
      : null;
    selectedVoices ? (params["tone"] = selectedVoices) : null;
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
  }
};

export default useFetchSuffix;
