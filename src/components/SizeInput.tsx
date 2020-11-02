import React, { useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import { CanvasActions } from '../store/types';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { IRootState } from '../store';

const mapDispatchToProps = (dispatch: Dispatch<CanvasActions>) => {
    return {
        sizeChanged: (newSize: number) => dispatch(actions.sizeChanged(newSize))
    }
};

const mapStateToProps = ({ canvas }: IRootState) => {
    return { currentSize: canvas.size };
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const SizeInput = ({ currentSize, sizeChanged } : ReduxType) => {
    const [size, setSize] = useState(currentSize);

    const onSizeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSize(Number(event.target.value));
    }, [setSize]);

    const onFormSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        sizeChanged(size);
        event.preventDefault();
    }, [sizeChanged, size]);

    return (
        <form onSubmit={onFormSubmit}>
            <input type="number" value={size} onChange={onSizeChange}></input>
            <input type="submit" value="Change Canvas Size"></input>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SizeInput);
