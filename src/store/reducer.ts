import { ActionConstants, CanvasActions, ICanvasState } from "./types";

const DEFAULT_SIZE = 8;
const DEFAULT_COLOR = '#FFFFFF';
const DEFAULT_FILL_COLOR = '#00FF00';

const intitializeColors = (size: number, color: string) => {
    let colors: string[][] = [];

    for (let rowIdx = 0; rowIdx < size; rowIdx++) {
        colors.push([]);
        for (let colIdx = 0; colIdx < size; colIdx++) {
            colors[rowIdx].push(color);
        }
    }

    return colors;
};

const initialState: ICanvasState = {
    colors: intitializeColors(DEFAULT_SIZE, DEFAULT_COLOR),
    size: DEFAULT_SIZE,
    fillColor: DEFAULT_FILL_COLOR
};

const canvasReducer = (state: ICanvasState = initialState, action: CanvasActions) => {
        const newState = { ...state };
        switch (action.type) {
            case ActionConstants.squareToggled:
                const { row, column } = action.payload.square;
                let fillColor = newState.fillColor;
                if (newState.colors[row][column] === newState.fillColor ) {
                    fillColor = DEFAULT_COLOR;
                }
                newState.colors[row][column] = fillColor;
                return newState
            case ActionConstants.canvasCleared:
                newState.colors = intitializeColors(newState.size, DEFAULT_COLOR);
                return newState;
            case ActionConstants.sizeChanged:
                newState.colors = intitializeColors(action.payload.size, DEFAULT_COLOR);
                newState.size = action.payload.size;
                return newState;
            default:
                return state;
        }
}

export default canvasReducer;
