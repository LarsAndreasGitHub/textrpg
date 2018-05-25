import * as React from "react";

export type MatrixMap = MapPosition[];

export enum MapDirection {
    UP = 0,
    LEFT = 1,
    DOWN = 2,
    RIGHT = 3,
}

export function getNewDirection(currentDirection: MapDirection, relativeDirection: MapDirection): MapDirection {
    return (currentDirection + relativeDirection) % 4;
}

export function getNewPosition(currentPosition: MapPosition, oneStepInDirection: MapDirection): MapPosition {
    const relativePosition: [number, number] = getRelativePosition(oneStepInDirection);
    return {
        x: currentPosition.x + relativePosition[0],
        y: currentPosition.y + relativePosition[1],
    };
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
    matrixMap: MatrixMap;
    startingPosition: MapPosition;
    startingDirection: MapDirection;
}

interface State {
    position: MapPosition;
    direction: MapDirection;
}

export class Map extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            position: props.startingPosition,
            direction: props.startingDirection
        }
    }

    travelInDirection(direction: MapDirection) {
        const newDirection = getNewDirection(this.state.direction, direction);
        const newPosition = getNewPosition(
            this.state.position,
            newDirection
        );

        if (this.props.matrixMap.includes(newPosition)) { // TODO Vil bare gå videre hvis ny position er innafor map
            this.setState({
                direction: newDirection,
                position: newPosition,
            });
        } else {
            console.log('outside da map'); //tslint:disable-line
        }
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
                {`x: ${this.state.position.x}, y: ${this.state.position.y}`}
                {this.props.children}
            </div>
        );
    }
}