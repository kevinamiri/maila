import { useContext } from 'react';
import { SettingsContext } from '../contexts/settings-context';

const useSettings = () => useContext(SettingsContext);

export default useSettings;
