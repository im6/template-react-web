import { createAction, createReducer } from "@reduxjs/toolkit";

export interface IState {
  value: number;
  isDark: boolean;
}

const initialState: IState = { value: 0, isDark: false };

const oneReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createAction<number>("home/add"), (state, action) => {
      state.value++;
    })
    .addCase(createAction<number>("home/sync-add/success"), (state, action) => {
      state.value += 10;
    });
});

export default oneReducer;
