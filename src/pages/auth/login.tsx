import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import LoginAmplify from "../../components/authentication/login/LoginAmplify";

export default function Login(props) {
  return (
    <>
      <AuthenticationLayout>
        <LoginAmplify {...props} />
      </AuthenticationLayout>
    </>
  );
}
