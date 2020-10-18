import { ICanvasState } from "./types";

const DEFAULT_SIZE = 8;
const DEFAULT_COLOR = '#FFFFFF';

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
    size: DEFAULT_SIZE
};

const canvasReducer = (state: ICanvasState = initialState, action: any) => {
        switch (action.type) {
            default:
                return state;
        }
}

export default canvasReducer;
