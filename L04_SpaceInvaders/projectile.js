"use strict";
var L04_SpaceInvaders;
(function (L04_SpaceInvaders) {
    var fc = FudgeCore;
    class Projectile extends L04_SpaceInvaders.GameObject {
        constructor(_name, _coordinates, _scale) {
            super(_name, _coordinates, _scale);
            this.speed = 10;
            this.onField = false;
        }
        build() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh();
            let cmpMat = new fc.ComponentMaterial(L04_SpaceInvaders.Player.material);
            this.addComponent(cmpMat);
        }
        fly() {
            this.activate(true);
            let offset = this.speed * fc.Loop.timeFrameReal / 1000;
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
    L04_SpaceInvaders.Projectile = Projectile;
})(L04_SpaceInvaders || (L04_SpaceInvaders = {}));
//# sourceMappingURL=projectile.js.map