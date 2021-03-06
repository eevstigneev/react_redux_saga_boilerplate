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
type Action<Px, Ax> = (payload: Px) => Ax;
type ExtractPayload<Ax> = Ax extends PayloadAction<infer P> ? (P extends void ? void : P) : never;
export const getActionHook = <A>() => <Ax extends A, Px extends ExtractPayload<Ax>>(
  action: Action<Px, Ax>,
): typeof action => {
  // export const getActionHook = <A, P>() => <Ax extends A, Px extends P>(action: Action<Px, Ax>): typeof action => {
  const dispatch = useDispatch();
  return useCallback<typeof action>(payload => dispatch(action(payload)), [dispatch, action]);
};
