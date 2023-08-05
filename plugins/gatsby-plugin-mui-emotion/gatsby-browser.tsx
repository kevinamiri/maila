
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { CacheProvider } from '@emotion/react';
import getEmotionCache from './getEmotionCache';
import {
  SettingsConsumer,
  SettingsProvider,
} from "../../src/contexts/settings-context";
import CssBaseline from "@mui/material/CssBaseline";
import { Direction, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createTheme } from "../../src/theme";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import store from "../../src/store";
import { RTL } from "../../src/components/layout/RTL";

const cache = getEmotionCache();


function TopLayout(props) {
  return (
    <>
      <CacheProvider value={cache}>
        <ReduxProvider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SettingsProvider>
              <SettingsConsumer>
                {({ settings }) => (
                  <ThemeProvider
                    theme={createTheme({
                      direction: settings.direction as Direction,
                      responsiveFontSizes: settings.responsiveFontSizes,
                      theme: settings.theme as "light" | "dark",
                      lang: settings.lang,
                    })}
                  >
                    <SnackbarProvider maxSnack={3}>
                      <RTL direction={settings.direction}>
                        <CssBaseline />
                        {props.children}
                      </RTL>
                    </SnackbarProvider>
                  </ThemeProvider>
                )}
              </SettingsConsumer>
            </SettingsProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </CacheProvider>
    </>
  );
}

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
