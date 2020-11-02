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
    squareToggled = 'squareToggled',
    canvasCleared = 'canvasCleared',
    sizeChanged = 'sizeChanged'
}


export type CanvasActions = ActionType<typeof actions>;
