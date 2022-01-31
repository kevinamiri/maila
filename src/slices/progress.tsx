import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progressValue: 0,
  status: 0,
};

const slice = createSlice({
  name: "progressValue",
  initialState,
  reducers: {
    updateProgressValue: (state, action) => {
      const updatedObject = {
        ...state,
        progressValue: action.payload,
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

export const updateProgressValue = (x) => async (dispatch) => {
  dispatch(slice.actions.updateProgressValue(x));
};

export default slice;
