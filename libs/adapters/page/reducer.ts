import {createReducer, PayloadAction}       from '@reduxjs/toolkit';
import {initialState, PageStore, setPageAction} from '@Adapters/page';

const setPage = (state, action: PayloadAction<number>) => {
  const {payload: page} = action;
  return {...state, page};
}

export const pageReducer = createReducer<PageStore>(initialState, {
  [setPageAction.type]: (state, action) => setPage(state, action),
});