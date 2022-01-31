import { Auth } from "aws-amplify";
import React from "react";

const usePayInfo = (plans) => {
  const [progress, setProgress] = React.useState(plans);
  const datasource = async () => {
    const theUrl = `https://api.maila.ai/paymentinfo`;
    let params = {};
    const user = await Auth.currentAuthenticatedUser();
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
    const { cusomersublists } = await response.json();
    return cusomersublists;
  };
  React.useEffect(() => {
    datasource().then(setProgress);
  }, []);

  return progress;
};

export default usePayInfo;
