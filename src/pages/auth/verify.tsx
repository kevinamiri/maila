import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import VerifyCodeAmplify from "../../components/authentication/verify-code/VerifyCodeAmplify";
import { IntlProvider } from "react-intl";
import useSettings from "../../hooks/useSettings";

export const WrapLayout = ({ children }) => {
  const { settings } = useSettings();
  const i18nMessages = require(`../../data/messages/${settings.lang}`);
  return (
    <IntlProvider
      locale={settings.lang}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};
export default function Verify() {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        <VerifyCodeAmplify />
      </AuthenticationLayout>
    </WrapLayout>
  );
}
