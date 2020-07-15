import {configureStore}                                from '@reduxjs/toolkit';
import {pageReducer}                        from '@Adapters/page';
import {combineReducers} from 'redux';
import {useDispatch}                                   from 'react-redux';

const reducers = {
  page: pageReducer
}

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();