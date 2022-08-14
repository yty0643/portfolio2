import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import scaleReducer from '../features/scale/scaleSlice';
import coordReducer from '../features/coord/coordSlice';
import nodesReducer from '../features/nodes/nodesSlice';
import edgesReducer from '../features/edges/edgesSlice';
import isLockReducer from '../features/isLock/isLockSlice';

export const store = configureStore({
  reducer: {
    scale: scaleReducer,
    coord: coordReducer,
    nodes: nodesReducer,
    edges: edgesReducer,
    isLock: isLockReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
