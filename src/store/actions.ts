import { action } from 'typesafe-actions';
import { ActionConstants, ICanvasCoord } from './types';

export function toggleSquare(square: ICanvasCoord) {
    return action(ActionConstants.TOGGLE_SQUARE, {
        square
    });
}
