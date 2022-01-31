
import Voices from "../components/subcomponents/Voices";

export interface languageTyped {
    code: string;
    label: string;
    LangCode: string;
  }

  export interface typedFieldsValue {
    keywordValue: string;
    audienceValue: string;
    businessNameValue: string;
    featureValue: string;
    defaultVoice: any;
    language: languageTyped;
  }
  
  export const initialState: typedFieldsValue = {
    keywordValue: "",
    audienceValue: "",
    businessNameValue: "",
    featureValue: "",
    defaultVoice: Voices.slice(1, 3),
    language: { code: "US", label: "English", LangCode: "en" },
  };