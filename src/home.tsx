import * as React from 'react';
import './App.less';
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
                <div className="arrowpad">
                    <ArrowButton direction={"up"}/>
                    <ArrowButton direction={"down"}/>
                    <ArrowButton direction={"right"}/>
                    <ArrowButton direction={"left"}/>
                </div>
            </div>
        );
    }
}

export default Home;
