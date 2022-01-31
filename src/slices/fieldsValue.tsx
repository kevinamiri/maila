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

    // bugResolved: (bugs, action) => {
    //   const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    //   bugs[index].resolved = true;
    // },

    // bugRemoved: (bugs, action) => {
    //   const temp = bugs.filter((bug) => bug.id !== action.payload.id);
    //   console.log(temp);
    //   return temp;
    // },
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

export default slice;
