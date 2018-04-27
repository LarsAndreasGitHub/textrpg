import * as React from "react";

// tslint:disable

export enum MapDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
}

function getRelativePosition(direction: MapDirection): [number, number] {
    switch (direction) {
        case MapDirection.UP:
            return [0, 1];
        case MapDirection.DOWN:
            return [0, -1];
        case MapDirection.RIGHT:
            return [1, 0];
        case MapDirection.LEFT:
            return [-1, 0];

    }
}

interface MapPosition {
    x: number;
    y: number;
}

interface Props {
    startingPosition: MapPosition;
    startingDirection: MapDirection;
}

interface State {
    position: MapPosition;
    direction: MapDirection;
}

export class MatrixMap extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            position: props.startingPosition,
            direction: props.startingDirection
        }
    }

    travelInDirection(direction: MapDirection) {
        const newDirection: MapDirection = (direction + this.state.direction) % 4;
        const relativePosition: [number, number] = getRelativePosition(newDirection);
        const newPosition: MapPosition = {
            x: this.state.position.x + relativePosition[0],
            y: this.state.position.x + relativePosition[1],
        };

        this.setState({
            direction: newDirection,
            position: newPosition,
        });
    }

    public render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}