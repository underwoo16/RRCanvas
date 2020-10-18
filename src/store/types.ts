import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface ICanvasState {
    colors: string[][],
    size: number,
    fillColor: string
}

export interface ICanvasCoord {
    row: number,
    column: number
}

export enum ActionConstants {
    FILL_SQUARE = 'FILL_SQUARE'
}


export type CanvasActions = ActionType<typeof actions>;
