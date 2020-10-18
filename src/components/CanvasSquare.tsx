import React, { useCallback } from 'react';

import './CanvasSquare.css';

interface Props {
    row: number,
    column: number
}
const CanvasSquare = ({ row, column } : Props) => {
    const onSquareClick = useCallback(() => { console.log(`square ${row}x${column} clicked`); }, [row, column]);
    return (
        <td className='canvas-square' onClick={onSquareClick}></td>
    )
};

export default CanvasSquare;
