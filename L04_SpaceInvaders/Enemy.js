"use strict";
var L04_SpaceInvaders;
(function (L04_SpaceInvaders) {
    var fc = FudgeCore;
    L04_SpaceInvaders.startPosEnemys = [
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
    class Enemy extends L04_SpaceInvaders.GameObject {
        constructor(_name, _coordinate, _scale) {
            super(_name, _coordinate, _scale);
            this.alive = true;
        }
        build() {
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh(Enemy.mesh);
            let cmpMat = new fc.ComponentMaterial(Enemy.material);
            this.addComponent(cmpMat);
        }
    }
    Enemy.mesh = new fc.MeshSphere("EnemyMesh", 6, 6);
    Enemy.material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
    L04_SpaceInvaders.Enemy = Enemy;
})(L04_SpaceInvaders || (L04_SpaceInvaders = {}));
//# sourceMappingURL=Enemy.js.map