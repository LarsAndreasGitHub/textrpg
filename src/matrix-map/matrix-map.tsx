import * as React from "react";

export enum MapDirection {
    UP = 0,
    LEFT = 1,
    DOWN = 2,
    RIGHT = 3,
}

export function turnToDirection(currentDirection: MapDirection, relativeDirection: MapDirection): MapDirection {
    return (currentDirection + relativeDirection) % 4;
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

export interface MapPosition {
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
        console.log('traveling in direction', direction); //tslint:disable-line
        const newDirection: MapDirection = turnToDirection(this.state.direction, direction);
        const relativePosition: [number, number] = getRelativePosition(newDirection);
        const newPosition: MapPosition = {
            x: this.state.position.x + relativePosition[0],
            y: this.state.position.x + relativePosition[1],
        };

        console.log('new position', newPosition); //tslint:disable-line

        this.setState({
            direction: newDirection,
            position: newPosition,
        });
    }

    public render() {
        const upButtonOnClick = () => this.travelInDirection(MapDirection.UP);
        const downButtonOnClick = () => this.travelInDirection(MapDirection.DOWN);
        const leftButtonOnClick = () => this.travelInDirection(MapDirection.LEFT);
        const rightButtonOnClick = () => this.travelInDirection(MapDirection.RIGHT);
        return (
            <div>
                <button onClick={upButtonOnClick}>UP</button>
                <button onClick={downButtonOnClick}>DOWN</button>
                <button onClick={leftButtonOnClick}>LEFT</button>
                <button onClick={rightButtonOnClick}>RIGHT</button>
                {this.props.children}
            </div>
        );
    }
}