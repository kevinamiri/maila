import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import PasswordRecoveryAmplify from "../../components/authentication/password-recovery/PasswordRecoveryAmplify";

export default function Recovery() {
  return (
    <>
      <AuthenticationLayout>
        <PasswordRecoveryAmplify />
      </AuthenticationLayout>
    </>
  );
}
