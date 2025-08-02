import { createAction, createReducer } from "@reduxjs/toolkit";

export interface IState {
  value: number;
  isDark: boolean;
}

const initialState: IState = { value: 0, isDark: false };

const oneReducer = createReducer(initialState, (builder) => {
  builder.addCase(createAction("ui/toggle"), (state) => {
    state.isDark = !state.isDark;
  });
});

export default oneReducer;
