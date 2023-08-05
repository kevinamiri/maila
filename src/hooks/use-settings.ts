import { useContext } from "react";
import type { SettingsContextValue } from "../contexts/settings-context";
import { SettingsContext } from "../contexts/settings-context";

const useSettings = (): SettingsContextValue => useContext(SettingsContext);

export default useSettings;
