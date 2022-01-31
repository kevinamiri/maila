import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import RegisterAmplify from "../../components/authentication/register/RegisterAmplify";

export default function Register() {
  return (
    <>
      <AuthenticationLayout>
        <RegisterAmplify />
      </AuthenticationLayout>
    </>
  );
}
