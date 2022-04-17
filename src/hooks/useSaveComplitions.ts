import { Auth } from "aws-amplify";

const postData = async ({ editor }) => {
  const theUrl = `https://api.maila.ai/save-completions`;
  const user = await Auth.currentAuthenticatedUser();
  let params = {};
  params["query"] = editor.children;
  params["username"] = user.username;
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
