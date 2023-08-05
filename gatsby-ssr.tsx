import React from "react";
import { SettingsProvider } from "./src/contexts/SettingsContext";
import useSettings from "./src/hooks/useSettings";
import CssBaseline from "@mui/material/CssBaseline";
import { Direction, ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./src/theme";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/store";

function TopLayout(props) {
  const { settings } = useSettings();
  const theme = createTheme({
    direction: settings.direction as Direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme as "light" | "dark",
    lang: settings.lang,
  });
  return (
    <>
      <SettingsProvider>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3}>
              {/* <GlobalStyles /> */}
              <CssBaseline />
              {props.children}
            </SnackbarProvider>
          </ThemeProvider>
        </ReduxProvider>
      </SettingsProvider>
    </>
  );
}

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
