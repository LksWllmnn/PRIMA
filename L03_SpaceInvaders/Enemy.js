"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    var fc = FudgeCore;
    L03_SpaceInvaders.startPosEnemys = [
        { coordinates: new fc.Vector3(-6, 15, 0) },
        { coordinates: new fc.Vector3(-4, 15, 0) },
        { coordinates: new fc.Vector3(-2, 15, 0) },
        { coordinates: new fc.Vector3(-0, 15, 0) },
        { coordinates: new fc.Vector3(2, 15, 0) },
        { coordinates: new fc.Vector3(4, 15, 0) },
        { coordinates: new fc.Vector3(6, 15, 0) },
        { coordinates: new fc.Vector3(-6, 13, 0) },
        { coordinates: new fc.Vector3(-4, 13, 0) },
        { coordinates: new fc.Vector3(-2, 13, 0) },
        { coordinates: new fc.Vector3(-0, 13, 0) },
        { coordinates: new fc.Vector3(2, 13, 0) },
        { coordinates: new fc.Vector3(4, 13, 0) },
        { coordinates: new fc.Vector3(6, 13, 0) },
        { coordinates: new fc.Vector3(-6, 11, 0) },
        { coordinates: new fc.Vector3(-4, 11, 0) },
        { coordinates: new fc.Vector3(-2, 11, 0) },
        { coordinates: new fc.Vector3(0, 11, 0) },
        { coordinates: new fc.Vector3(2, 11, 0) },
        { coordinates: new fc.Vector3(4, 11, 0) },
        { coordinates: new fc.Vector3(6, 11, 0) }
    ];
    class Enemy extends L03_SpaceInvaders.GameObject {
        constructor(_name, _coordinate, _mat, _mesh, _scale) {
            super(_name, _coordinate, _mat, _mesh, _scale);
            this.alive = true;
        }
    }
    L03_SpaceInvaders.Enemy = Enemy;
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=Enemy.js.map