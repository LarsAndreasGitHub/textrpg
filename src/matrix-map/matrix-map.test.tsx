import {MapDirection, getNewDirection, getNewPosition} from "./matrix-map";

it('Tests the basic mechanics of turning from an absolute direction by a relative direction. It is a group.', () => {
    expect(getNewDirection(MapDirection.UP, MapDirection.UP)).toBe(MapDirection.UP);
    expect(getNewDirection(MapDirection.UP, MapDirection.DOWN)).toBe(MapDirection.DOWN);
    expect(getNewDirection(MapDirection.UP, MapDirection.LEFT)).toBe(MapDirection.LEFT);
    expect(getNewDirection(MapDirection.UP, MapDirection.RIGHT)).toBe(MapDirection.RIGHT);

    expect(getNewDirection(MapDirection.DOWN, MapDirection.DOWN)).toBe(MapDirection.UP);
    expect(getNewDirection(MapDirection.DOWN, MapDirection.LEFT)).toBe(MapDirection.RIGHT);
    expect(getNewDirection(MapDirection.DOWN, MapDirection.RIGHT)).toBe(MapDirection.LEFT);

    expect(getNewDirection(MapDirection.LEFT, MapDirection.LEFT)).toBe(MapDirection.DOWN);
    expect(getNewDirection(MapDirection.LEFT, MapDirection.RIGHT)).toBe(MapDirection.UP);

    expect(getNewDirection(MapDirection.RIGHT, MapDirection.RIGHT)).toBe(MapDirection.DOWN);
});

it('Test whether getNewPosition returns the desired position.', () => {
    expect(getNewPosition({x:10, y:11}, MapDirection.LEFT)).toBe({9, 11});
    expect(getNewPosition({x:10, y:11}, MapDirection.RIGHT)).toBe({11, 11});
    expect(getNewPosition({x:10, y:11}, MapDirection.UP)).toBe({10, 12});
    expect(getNewPosition({x:10, y:11}, MapDirection.DOWN)).toBe({10, 10});
});
