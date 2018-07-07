import * as React from 'react';
import './App.less';
import ArrowButton from "./Component/ArrowButton";
import {matrixMap} from "./map/matrix-map";
import {MapDirection, Map} from "./map/map";

class Home extends React.Component {
    public render() {
        return (
            <div>
                <Map
                    startingDirection={MapDirection.UP}
                    startingPosition={{x: 0, y: 0}}
                    matrixMap={matrixMap}
                />
                <ArrowButton direction={"up"}/>
            </div>
        );
    }
}

export default Home;
