"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    var fc = FudgeCore;
    class Projectile extends L03_SpaceInvaders.GameObject {
        constructor(_name, _coordinates, _mat, _mesh, _scale) {
            super(_name, _coordinates, _mat, _mesh, _scale);
            this.speed = 10;
            this.onField = false;
            //console.log(this.getComponent(fc.ComponentMesh).mtxPivot.scaleX(0.1));
        }
        fly() {
            let offset = this.speed * fc.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateY(offset);
            this.coodrinates.y += offset;
        }
        getCoordinates() {
            return this.coodrinates;
        }
        setCoordinates(_coordinates) {
            this.coodrinates = _coordinates;
        }
    }
    L03_SpaceInvaders.Projectile = Projectile;
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=projectile.js.map