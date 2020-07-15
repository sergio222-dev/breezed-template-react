import {createAction} from '@reduxjs/toolkit';
import {Pages}        from '@Adapters/page/store';

export enum Actions {
  SET_PAGE = `set_page`,
}

export type ActionCallable<T> = (args: T) => { payload: T };

export const setPageAction = createAction<ActionCallable<Pages>, Actions>(Actions.SET_PAGE, (page) => ({
    payload: page
  })
);