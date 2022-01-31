import { combineReducers } from "@reduxjs/toolkit";
import { reducer as chatReducer } from "../slices/chat";
import { reducer as fieldReducer } from "../slices/fieldsValue";
import { reducer as progressReducer } from "../slices/progress";
import { reducer as counterSlice } from "../slices/counter";
import { reducer as editorReducer } from "../slices/editorParams";

const rootReducer = combineReducers({
  chat: chatReducer,
  counter: counterSlice,
  fieldsValue: fieldReducer,
  progressValue: progressReducer,
  editorParams: editorReducer,
});

export default rootReducer;
