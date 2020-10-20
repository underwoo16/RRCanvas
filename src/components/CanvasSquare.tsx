import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../store';
import { Dispatch } from 'redux';
import * as actions from '../store/actions';
import { CanvasActions, ICanvasCoord } from '../store/types';

import './CanvasSquare.css';

interface Props {
    row: number,
    column: number,
}

const mapDispatchToProps = (dispatch: Dispatch<CanvasActions>) => {
    return {
        squareToggled: (square: ICanvasCoord) => dispatch(actions.squareToggled(square))
    };
};

const mapStateToProps = ({ canvas }: IRootState, { row, column }: Props) => {
    const { colors } = canvas;
    const currentColor = colors[row][column];
    return { row, column, currentColor };
};
type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;;

const CanvasSquare = ({ row, column, currentColor, squareToggled } : ReduxType) => {
    const onSquareClick = useCallback(() => {
            squareToggled({ row, column });
        },
        [row, column, squareToggled]
    );

    return (
        <td className='canvas-square' style={{ backgroundColor: currentColor }} onClick={onSquareClick}></td>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasSquare);
