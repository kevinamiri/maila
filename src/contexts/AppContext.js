import { createContext } from "react";


const initialValue = {
    type: 'paragraph',
    children: [
        { text: "Sample Text" }
    ],
}

const countries = [
    { code: 'US', label: 'English', LangCode: 'en' },
    { code: 'SV', label: 'Swedish', LangCode: 'sv' },
    { code: 'DE', label: 'German', LangCode: 'de' },
    { code: 'FI', label: 'Finnish', LangCode: 'fi' },
    { code: 'NO', label: 'Norwegian', LangCode: 'no' },
    { code: 'FR', label: 'French', LangCode: 'fr' },
    { code: 'IR', label: 'Persian', LangCode: 'fa' },
    { code: 'CN', label: 'Chinese', LangCode: 'zh' },
    { code: 'RU', label: 'Russian', LangCode: 'ru' },
    { code: 'NL', label: 'Dutch', LangCode: 'nl' },
    { code: 'KO', label: 'Korean', LangCode: 'ko' },
    { code: 'TR', label: 'Turkish', LangCode: 'tr' },
    { code: 'PT', label: 'Portuguese', LangCode: 'pt' },
    { code: 'ES', label: 'Spanish', LangCode: 'es' },
];

const defaultContext = {
    IsOpen: false,
    initialTextValue: initialValue,
    primaryTextValue: initialValue,
    defaultLanguageUse: "fa",
    stateLanguage: "en",
    langTextInput: "en",
    langTextOutPut: "fr",
    value: "testValue",
    Languages: countries,
    setValue: () => { },
    toggleTextUpdateValue: () => { },
    toggleOpen: () => { },
    checkUser: () => { },
    logout: () => { },
    userInfo: null
};

const defaultLangContext = {
    defaultLanguageUse: "en"
};


const AppContext = createContext(defaultContext);
export const LangContext = createContext(defaultLangContext);


export default AppContext;
