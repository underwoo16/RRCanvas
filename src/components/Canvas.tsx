import React from "react";
import CanvasRow from "./CanvasRow";
import './Canvas.css';
import { IRootState } from "../store";
import { connect } from "react-redux";


const mapStateToProps = ({ canvas }: IRootState) => {
    const { size } = canvas;
    return { size };
};

type ReduxType = ReturnType<typeof mapStateToProps>;

const Canvas = ({ size } : ReduxType) => {
    let canvasRows = [];
    for (let rowIdx = 0; rowIdx < size; rowIdx++) {
        canvasRows.push(<CanvasRow rowIdx={rowIdx} key={`canvas_row_${rowIdx}`}></CanvasRow>);
    }
    return (
        <table className='canvas'>
            <tbody>
                {canvasRows}
            </tbody>
        </table>
    );
};

export default connect(mapStateToProps)(Canvas);