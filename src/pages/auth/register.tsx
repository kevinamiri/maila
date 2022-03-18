import React from "react";
import "../../../configureAmplify";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";
import RegisterAmplify from "../../components/authentication/register/RegisterAmplify";
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
export default function Register() {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        <RegisterAmplify />
      </AuthenticationLayout>
    </WrapLayout>
  );
}
