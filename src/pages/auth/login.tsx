import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import LoginAmplify from "../../components/authentication/login/LoginAmplify";

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

export default function Login() {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        <LoginAmplify />
      </AuthenticationLayout>
    </WrapLayout>
  );
}
