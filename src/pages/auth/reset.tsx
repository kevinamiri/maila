import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import PasswordResetAmplify from "../../components/authentication/password-reset/PasswordResetAmplify";

export default function Reset() {
  return (
    <>
      <AuthenticationLayout>
        <PasswordResetAmplify />
      </AuthenticationLayout>
    </>
  );
}
