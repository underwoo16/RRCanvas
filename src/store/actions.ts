import { action } from 'typesafe-actions';
import { ActionConstants, ICanvasCoord } from './types';

export function fillSquare(square: ICanvasCoord) {
    return action(ActionConstants.FILL_SQUARE, {
        square
    });
}