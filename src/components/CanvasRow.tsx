import React from 'react';
import { connect } from 'react-redux';
import CanvasSquare from './CanvasSquare';
import { IRootState } from '../store';

import './CanvasRow.css';

interface Props {
    rowIdx: number
}

const mapStateToProps = ({ canvas }: IRootState, { rowIdx }: Props) => {
    const { size } = canvas;
    return { size, rowIdx };
};
type ReduxType = ReturnType<typeof mapStateToProps>;

const CanvasRow = ({ size, rowIdx } : ReduxType) => {
    let children = [];
    for (let colIdx = 0; colIdx < size; colIdx++) {
        children.push(<CanvasSquare row={rowIdx} column={colIdx} key={`${rowIdx}x${colIdx}`}></CanvasSquare>);
    }

    return (
        <tr className='canvas-row'>
            {children}
        </tr>
    );
};

export default connect(mapStateToProps)(CanvasRow);
