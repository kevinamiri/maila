import React, { useState } from "react";
import Login from "../pages/auth/login";

const SignIn = () => {
  const [isMount, setMount] = useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return <div>loading...</div>;
  }

  return <Login />;
};
export default SignIn;
