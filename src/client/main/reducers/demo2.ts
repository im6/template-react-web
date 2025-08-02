import { createAction, createReducer } from "@reduxjs/toolkit";

export interface IState {
  value: number;
}

const initialState: IState = { value: 0 };

const oneReducer = createReducer(initialState, (builder) => {
  builder.addCase(createAction<number>("demo2/add"), (state, action) => {
    state.value++;
  });
});

export default oneReducer;
