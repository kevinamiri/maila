import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface Settings {
  direction: string;
  responsiveFontSizes: boolean;
  lang: string;
  theme: string;
}

const initialSettings: Settings = JSON.parse(typeof window !== "undefined" && localStorage.getItem("settings")) || {
  direction: 'ltr',
  responsiveFontSizes: true,
  lang: "en",
  theme: 'light'
};

const defaultSettings = (): Settings => {
  return (
    JSON.parse(typeof window !== "undefined" && localStorage.getItem("settings")) || {
      direction: "ltr",
      responsiveFontSizes: true,
      lang: "en",
      theme: 'light',
    }
  );
};

export const restoreSettings = (): Settings | null => {
  let settings: Settings | null = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        direction: 'ltr',
        responsiveFontSizes: true,
        lang: "en",
        theme: 'light'
      };
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings: Settings): void => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

interface SettingsContextProps {
  settings: Settings;
  saveSettings: (settings: Settings) => void;
}

const SettingsContext = createContext<SettingsContextProps>({
  settings: initialSettings,
  saveSettings: () => { }
});

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = (props) => {
  const { children } = props;
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings: Settings) => {
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

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
