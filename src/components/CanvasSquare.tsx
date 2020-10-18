import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../store';

import './CanvasSquare.css';

interface Props {
    row: number,
    column: number,
}

const mapStateToProps = ({ canvas }: IRootState, { row, column }: Props) => {
    const { colors } = canvas;
    const currentColor = colors[row][column];
    return { row, column, currentColor };
};
type ReduxType = ReturnType<typeof mapStateToProps>;

const CanvasSquare = ({ row, column, currentColor } : ReduxType) => {
    const onSquareClick = useCallback(() => { console.log(`square ${row}x${column} clicked`); }, [row, column]);
    return (
        <td className='canvas-square' style={{ backgroundColor: currentColor }} onClick={onSquareClick}></td>
    )
};

export default connect(mapStateToProps)(CanvasSquare);
