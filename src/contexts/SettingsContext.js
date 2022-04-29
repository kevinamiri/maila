import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { THEMES } from '../constants';

const initialSettings = JSON.parse(typeof window !== "undefined" && localStorage.getItem("settings")) || {
  compact: true,
  direction: 'ltr',
  responsiveFontSizes: true,
  roundedCorners: false,
  lang: "en",
  theme: 'light'
};

const defaultSettings = () => {
  return (
    JSON.parse(typeof window !== "undefined" && localStorage.getItem("settings")) || {
      compact: true,
      direction: "ltr",
      responsiveFontSizes: true,
      roundedCorners: false,
      lang: "en",
      theme: 'light',
    }
  );
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        compact: true,
        direction: 'ltr',
        responsiveFontSizes: true,
        roundedCorners: false,
        lang: "en",
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      };
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: () => { }
});

export const SettingsProvider = (props) => {
  const { children } = props;
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings) => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};


SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
