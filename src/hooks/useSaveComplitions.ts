import { Auth } from "aws-amplify";
import React from "react";

const postData = async (editor) => {
  const theUrl = `https://api.maila.ai/save-completions`;
  const user = await Auth.currentAuthenticatedUser();
  let params = {};
  params["username"] = user.username;
  params["query"] = editor.children;
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
  const res = await response.json();
  return res;
};

export default postData;
