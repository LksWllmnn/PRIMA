"use strict";
var L06_SpaceInvaders;
(function (L06_SpaceInvaders) {
    var fc = FudgeCore;
    class Projectile extends L06_SpaceInvaders.GameObject {
        constructor(_name, _coordinates, _scale, _mat) {
            super(_name, _coordinates, _scale);
            this.speed = 10;
            this.onField = false;
            this.mat = _mat;
        }
        build() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh();
            let cmpMat = new fc.ComponentMaterial(this.mat);
            this.addComponent(cmpMat);
        }
        fly() {
            this.activate(true);
            let offset = this.speed * fc.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateY(offset);
            this.coodrinates.y += offset;
            this.setRectPosition();
        }
        flyEnemy() {
            this.activate(true);
            let offset = -this.speed * fc.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateY(offset);
            this.coodrinates.y += offset;
            this.setRectPosition();
        }
        getCoordinates() {
            return this.coodrinates;
        }
        setCoordinates(_coordinates) {
            this.coodrinates = _coordinates;
        }
    }
    L06_SpaceInvaders.Projectile = Projectile;
})(L06_SpaceInvaders || (L06_SpaceInvaders = {}));
//# sourceMappingURL=projectile.js.map