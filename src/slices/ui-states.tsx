import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface typedExpansion {
  expand: boolean;
}

const initialState: typedExpansion = {
  expand: true,
};

const slice = createSlice({
  name: "uiStates",
  initialState,
  reducers: {
    updateExpansion(state, action: PayloadAction<boolean>) {
      const updatedObject = {
        ...state,
        expand: action.payload,
      };
      return updatedObject;
    },
    updateHighlghted: (state, action: PayloadAction<string>) => {
      const updatedObject = {
        ...state,
        highlightedText: action.payload,
      };
      return updatedObject;
    },
  },
});

export const { reducer } = slice;

export const updateExpansion = (x) => async (dispatch) => {
  dispatch(slice.actions.updateExpansion(x));
};
export const updateHighlghted = (x) => async (dispatch) => {
  dispatch(slice.actions.updateHighlghted(x));
};

export default slice;
