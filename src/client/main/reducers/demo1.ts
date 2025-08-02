import { createAction, createReducer } from "@reduxjs/toolkit";

export interface IState {
  value: number;
  loading: boolean;
}

const initialState: IState = { value: 0, loading: false };

const oneReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createAction<number>("demo1/add"), (state, action) => {
      state.value++;
    })
    .addCase(createAction<number>("demo1/sync-add"), (state, action) => {
      state.loading = true;
    })
    .addCase(
      createAction<number>("demo1/sync-add/success"),
      (state, action) => {
        state.loading = false;
        state.value += 10;
      }
    );
});

export default oneReducer;
