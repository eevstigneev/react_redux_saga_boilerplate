import {useCallback} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';

/**
 * Generic hook to access a given slice of the RootState,
 * selected by the key provided.
 * @param key
 */
export const getPartOfStore = <K extends keyof RootState>(key: K) => (): RootState[K] =>
  useSelector<RootState, RootState[K]>((s: RootState) => s[key], shallowEqual);

/**
 * Generic hook-function to use with Action/Payload-types.
 * Removes overhead of manually writing out hooks for actions.
 */
type Action<Px> = (payload: Px) => PayloadAction<Px>;
export const getActionHook = <P = unknown>() => <Px extends P>(action: Action<Px>): Action<Px> => {
  const dispatch = useDispatch();
  return useCallback<Action<Px>>(payload => dispatch(action(payload)), [dispatch, action]);
};
