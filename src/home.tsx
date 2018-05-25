import * as React from 'react';
import './App.css';
import ArrowButton from "./Component/ArrowButton";
import {MapDirection, MatrixMap} from "./matrix-map/matrix-map";

class Home extends React.Component {
    public render() {
        return (
            <div>
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
