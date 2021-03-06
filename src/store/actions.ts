import { action } from 'typesafe-actions';
import { ActionConstants, ICanvasCoord } from './types';

export function squareToggled(square: ICanvasCoord) {
    return action(ActionConstants.squareToggled, { square });
}

export function canvasCleared() {
    return action(ActionConstants.canvasCleared);
}

export function sizeChanged(size: number) {
    return action(ActionConstants.sizeChanged, { size });
}