import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location as slateLocation, Path } from "slate";
import type { AppThunk } from "../store";

export interface typedEditorParams {
  selectedTextValue: string;
  selectedRange: any;
  selectionStatus: any;
  currentWordRange: slateLocation | boolean;
  commandCompatiblePointWords: any;
}

const initialState: typedEditorParams = {
  selectedTextValue: "",
  selectedRange: null,
  selectionStatus: false,
  currentWordRange: false,
  commandCompatiblePointWords: null,
};

const slice = createSlice({
  name: "editorParams",
  initialState,
  reducers: {
    updateSelectedText: (
      state: typedEditorParams,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        selectedTextValue: action.payload,
      };
      return updatedObject;
    },
    updateSelectedRange: (
      state: typedEditorParams,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        selectedRange: action.payload,
      };
      return updatedObject;
    },
    updateSelectionStatus: (
      state: typedEditorParams,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        selectionStatus: action.payload,
      };
      return updatedObject;
    },

    setCurrentWordRange: (
      state: typedEditorParams,
      action: PayloadAction<slateLocation>
    ) => {
      const updatedObject = {
        ...state,
        currentWordRange: action.payload,
      };
      return updatedObject;
    },
    updateCommandPointWords: (
      state: typedEditorParams,
      action: PayloadAction<string>
    ) => {
      const updatedObject = {
        ...state,
        commandCompatiblePointWords: action.payload,
      };
      return updatedObject;
    },
  },
});

export const { reducer } = slice;

export const updateSelectedText =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateSelectedText(x));
  };

export const updateSelectedRange =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateSelectedRange(x));
  };

export const updateSelectionStatus =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateSelectionStatus(x));
  };

export const setCurrentWordRange =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.setCurrentWordRange(x));
  };

export const updateCommandPointWords =
  (x): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateCommandPointWords(x));
  };

export default slice;
