import { combineReducers, createStore } from 'redux';
import canvasReducer from './reducer';
import { ICanvasState } from './types';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
    canvas: ICanvasState
}
const store = createStore<IRootState, any, any, any>(
    combineReducers({
        canvas: canvasReducer
}), composeWithDevTools());

export default store;
