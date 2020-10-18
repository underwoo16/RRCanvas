import { ICanvasState } from "./types";

const initialState: ICanvasState = {
    colors: [],
    size: 8
};

const canvasReducer = (state: ICanvasState = initialState, action: any) => {
        switch (action.type) {
            default:
                return state;
        }
}

export default canvasReducer;