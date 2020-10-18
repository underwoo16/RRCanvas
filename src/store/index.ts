import { combineReducers, createStore } from 'redux';
import canvasReducer from './reducer';
import { ICanvasState } from './types';

export interface IRootState {
    canvas: ICanvasState
}
const store = createStore<IRootState, any, any, any>(
    combineReducers({
        canvas: canvasReducer
}));

export default store;
