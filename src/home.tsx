import * as React from 'react';
import './App.less';
import ArrowButton from "./Component/ArrowButton";
import {MapDirection, MatrixMap} from "./matrix-map/matrix-map";
import TestTest from './testtest';

class Home extends React.Component {
    public render() {
        return (
            <div>
                <TestTest />
                <MatrixMap
                    startingDirection={MapDirection.UP}
                    startingPosition={{x: 0, y: 0}}
                />
                <ArrowButton direction={"up"}/>
            </div>
        );
    }
}

export default Home;
