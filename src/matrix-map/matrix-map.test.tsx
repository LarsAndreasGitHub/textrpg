import * as React from 'react';
import {MapDirection, turnToDirection} from "./matrix-map";

it('Tests the basic mechanics of turning from an absolute direction by a relative direction. It is a group.', () => {
    expect(turnToDirection(MapDirection.UP, MapDirection.UP)).toBe(MapDirection.UP);
    expect(turnToDirection(MapDirection.UP, MapDirection.DOWN)).toBe(MapDirection.DOWN);
    expect(turnToDirection(MapDirection.UP, MapDirection.LEFT)).toBe(MapDirection.LEFT);
    expect(turnToDirection(MapDirection.UP, MapDirection.RIGHT)).toBe(MapDirection.RIGHT);

    expect(turnToDirection(MapDirection.DOWN, MapDirection.DOWN)).toBe(MapDirection.UP);
    expect(turnToDirection(MapDirection.DOWN, MapDirection.LEFT)).toBe(MapDirection.RIGHT);
    expect(turnToDirection(MapDirection.DOWN, MapDirection.RIGHT)).toBe(MapDirection.LEFT);

    expect(turnToDirection(MapDirection.LEFT, MapDirection.LEFT)).toBe(MapDirection.DOWN);
    expect(turnToDirection(MapDirection.LEFT, MapDirection.RIGHT)).toBe(MapDirection.UP);

    expect(turnToDirection(MapDirection.RIGHT, MapDirection.RIGHT)).toBe(MapDirection.DOWN);
});
