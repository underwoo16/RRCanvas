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
        fillSquare: (square: ICanvasCoord) => dispatch(actions.fillSquare(square))
    };
};

const mapStateToProps = ({ canvas }: IRootState, { row, column }: Props) => {
    const { colors } = canvas;
    const currentColor = colors[row][column];
    return { row, column, currentColor };
};
type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;;

const CanvasSquare = ({ row, column, currentColor, fillSquare } : ReduxType) => {
    const onSquareClick = useCallback(() => {
            fillSquare({ row, column });
        },
        [row, column, fillSquare]
    );

    return (
        <td className='canvas-square' style={{ backgroundColor: currentColor }} onClick={onSquareClick}></td>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasSquare);
