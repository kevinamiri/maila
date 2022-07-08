import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import countries from "components/account/countries";
import { AppThunk } from "store";
import { typedFieldsValue, languageTyped, initialState } from "./sliceTypes";

const slice = createSlice({
  name: "fieldsValue",
  initialState,
  reducers: {
    updateKeywordValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        keywordValue: action.payload,
      };
      return updatedObject;
    },
    updateAudienceValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        audienceValue: action.payload,
      };
      return updatedObject;
    },
    updateBusinessNameValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        businessNameValue: action.payload,
      };
      return updatedObject;
    },
    updateFeatureValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        featureValue: action.payload,
      };
      return updatedObject;
    },
    updateToneOfVoiceValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        defaultVoice: action.payload,
      };
      return updatedObject;
    },
    updateDefaultLanguage: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const { LangCode }: any = action.payload;
      const updatedObject = {
        ...state,
        language: countries.find((e) => e.LangCode === LangCode),
      };
      return updatedObject;
    },
    updatePurposeValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        purposeValue: action.payload,
      };
      return updatedObject;
    },
    updateMissionValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        missionValue: action.payload,
      };
      return updatedObject;
    },

    updateFormValue: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        formValue: action.payload,
      };
      return updatedObject;
    },

    updateSuffix: (state: typedFieldsValue, action: PayloadAction<string>) => {
      const updatedObject = {
        ...state,
        suffix: action.payload,
      };
      return updatedObject;
    },
    updateMaxTokens: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        maxTokens: action.payload,
      };
      return updatedObject;
    },
    updateTemperature: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        temperature: action.payload,
      };
      return updatedObject;
    },
    updatePresencePenalty: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        presencePenalty: action.payload,
      };
      return updatedObject;
    },
    updateFrequencyPenalty: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        frequencyPenalty: action.payload,
      };
      return updatedObject;
    },
    updateEngineId: (
      state: typedFieldsValue,
      action: PayloadAction<number>
    ) => {
      const updatedObject = {
        ...state,
        engineId: action.payload,
      };
      return updatedObject;
    },
    updateOutputShape: (
      state: typedFieldsValue,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        outputShape: action.payload,
      };
      return updatedObject;
    },
  },
});

export const { reducer } = slice;

export const updateKeywordValue =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateKeywordValue(x));
  };

export const updateAudienceValue =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateAudienceValue(x));
  };
export const updateBusinessNameValue =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateBusinessNameValue(x));
  };
export const updateFeatureValue =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateFeatureValue(x));
  };
export const updateFormValue =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateFormValue(x));
  };
export const updateMissionValue =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateMissionValue(x));
  };
export const updatePurposeValue =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updatePurposeValue(x));
  };

export const updateToneOfVoiceValue =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateToneOfVoiceValue(x));
  };

export const updateDefaultLanguage =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateDefaultLanguage(x));
  };

export const updateSuffix =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateSuffix(x));
  };

export const updateMaxTokens =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateMaxTokens(x));
  };

export const updateTemperature =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateTemperature(x));
  };

export const updatePresencePenalty =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updatePresencePenalty(x));
  };

export const updateFrequencyPenalty =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateFrequencyPenalty(x));
  };

export const updateEngineId =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateEngineId(x));
  };

export const updateOutputShape =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateOutputShape(x));
  };
