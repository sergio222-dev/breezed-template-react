import {useSelector}               from 'react-redux';
import {AppDispatch, RootState, useAppDispatch} from '../../libs/framework';
import {PageStore}                              from '@Adapters/page';

export const usePage = (): [PageStore, AppDispatch]  => {
  const pageStore = useSelector<RootState, PageStore>((store) => store.page);
  const dispatch = useAppDispatch();

  return [pageStore, dispatch];
}