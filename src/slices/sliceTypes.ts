import Voices from "../components/subcomponents/Voices";

export interface languageTyped {
  code: string;
  label: string;
  LangCode: string;
}

export interface typedFieldsValue {
  keywordValue?: string;
  audienceValue?: string;
  businessNameValue?: string;
  formTypeValue?: boolean;
  purposeValue?: string;
  missionValue?: string;
  companyValue?: string;
  featureValue?: string;
  outputShape: string;
  defaultVoice?: any;
  language?: languageTyped;
  suffix?: string;
  maxTokens?: number | null;
  temperature?: number | null;
  presencePenalty?: number | null;
  frequencyPenalty?: number | null;
  engineId?: number | null;
}

export const initialState: typedFieldsValue = {
  keywordValue: "",
  suffix: "",
  engineId: null,
  maxTokens: null,
  temperature: null,
  presencePenalty: null,
  frequencyPenalty: null,
  audienceValue: "",
  businessNameValue: "",
  featureValue: "",
  outputShape: "questions",
  purposeValue: "",
  missionValue: "",
  companyValue: "",
  defaultVoice: Voices.slice(1, 3),
  language: { code: "US", label: "English", LangCode: "en" },
};
