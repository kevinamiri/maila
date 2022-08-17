import React from "react";
import { Auth } from "aws-amplify";

const useFetchAll = async (
  parameters: string,
  gtoken: string,
  url: string,
  fieldValues
) => {
  try {
    const urlType = url;
    const element = `${parameters}`;
    const theUrl = `https://api.maila.ai/generate`;
    const params = {};
    const ListVoices = fieldValues.defaultVoice.map((x) => x.tone);
    const selectedVoices = ListVoices.join(",");
    params["query"] = element;
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
    fieldValues.engineId ? (params["engineId"] = fieldValues.engineId) : null;
    fieldValues.frequencyPenalty
      ? (params["frequencyPenalty"] = fieldValues.frequencyPenalty)
      : null;
    fieldValues.featureValue
      ? (params["feature"] = fieldValues.featureValue)
      : null;
    fieldValues.keywordValue
      ? (params["keyword"] = fieldValues.keywordValue)
      : null;
    fieldValues.keywordValue
      ? (params["company"] = fieldValues.keywordValue) ||
        (params["company"] = fieldValues.businessNameValue)
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
    return error;
  }
};

export default useFetchAll;
