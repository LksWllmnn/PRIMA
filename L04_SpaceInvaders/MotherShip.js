"use strict";
var L04_SpaceInvaders;
(function (L04_SpaceInvaders) {
    var fc = FudgeCore;
    class Mothership extends L04_SpaceInvaders.GameObject {
        constructor(_name, _coordinate, _scale) {
            super(_name, _coordinate, _scale);
            this.alive = true;
        }
        build() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh();
            let cmpMat = new fc.ComponentMaterial(Mothership.material);
            this.addComponent(cmpMat);
        }
    }
    Mothership.material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
    L04_SpaceInvaders.Mothership = Mothership;
})(L04_SpaceInvaders || (L04_SpaceInvaders = {}));
//# sourceMappingURL=MotherShip.js.map