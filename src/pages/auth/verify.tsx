import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import VerifyCodeAmplify from "../../components/authentication/verify-code/VerifyCodeAmplify";

export default function Verify() {
  return (
    <>
      <AuthenticationLayout>
        <VerifyCodeAmplify />
      </AuthenticationLayout>
    </>
  );
}
