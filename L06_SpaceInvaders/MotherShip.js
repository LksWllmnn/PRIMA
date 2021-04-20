"use strict";
var L06_SpaceInvaders;
(function (L06_SpaceInvaders) {
    var fc = FudgeCore;
    class Mothership extends L06_SpaceInvaders.GameObject {
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
    L06_SpaceInvaders.Mothership = Mothership;
})(L06_SpaceInvaders || (L06_SpaceInvaders = {}));
//# sourceMappingURL=MotherShip.js.map