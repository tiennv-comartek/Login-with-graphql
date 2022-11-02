import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { setPageTitle as setPageTitleAction } from '../redux/actions';
import { RootState } from '@redux/reducers';
import { setTitle } from '@helpers/dom';

export default function useSetPageTitle() {
  const pageTitle = useSelector<RootState, string>((state) => state.app.title);
  const dispatch = useDispatch();

  const setPageTitle = useCallback(
    (title: string) => {
      setTitle(title);
      dispatch(setPageTitleAction(title));
    },
    [dispatch],
  );

  return {
    setPageTitle,
    pageTitle,
  };
}
