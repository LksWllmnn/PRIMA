"use strict";
var L05_SpaceInvaders;
(function (L05_SpaceInvaders) {
    var fc = FudgeCore;
    L05_SpaceInvaders.startPosEnemys = [
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
    class Enemy extends L05_SpaceInvaders.GameObject {
        constructor(_name, _coordinate, _scale) {
            super(_name, _coordinate, _scale);
            this.alive = true;
        }
        build() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh(Enemy.mesh);
            let cmpMat = new fc.ComponentMaterial(Enemy.material);
            this.addComponent(cmpMat);
        }
        correctCollider() {
            this.rect.x = this.mtxWorld.translation.x - this.scale.x / 2;
            this.rect.y = this.mtxWorld.translation.y - this.scale.y / 2;
            //console.log(this.rect.y);
        }
    }
    Enemy.mesh = new fc.MeshSphere("EnemyMesh", 6, 6);
    Enemy.material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
    L05_SpaceInvaders.Enemy = Enemy;
})(L05_SpaceInvaders || (L05_SpaceInvaders = {}));
//# sourceMappingURL=Enemy.js.map