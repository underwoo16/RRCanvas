import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { CanvasActions } from '../store/types';
import * as actions from '../store/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch<CanvasActions>) => {
    return {
        canvasCleared: () => dispatch(actions.canvasCleared())
    }
};

type ReduxType = ReturnType<typeof mapDispatchToProps>;

const ClearButton = ({ canvasCleared } : ReduxType) => {
    const onButtonClicked = useCallback(() => {
            canvasCleared();
        },
        [canvasCleared]
    ); 

    return (
        <button onClick={onButtonClicked}>Clear Canvas</button>
    )
}

export default connect(null, mapDispatchToProps)(ClearButton);
