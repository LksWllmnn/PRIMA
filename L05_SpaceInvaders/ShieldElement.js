"use strict";
var L05_SpaceInvaders;
(function (L05_SpaceInvaders) {
    var fc = FudgeCore;
    class ShieldElement extends L05_SpaceInvaders.GameObject {
        constructor(_name, _coordinates, _scale) {
            super(_name, _coordinates, _scale);
        }
        buildElement() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            this.addComponent(new fc.ComponentTransform());
            this.buildMesh();
            let cmpMatBlock = new fc.ComponentMaterial(ShieldElement.material);
            this.addComponent(cmpMatBlock);
            this.mtxLocal.translateX(this.coodrinates.x);
        }
    }
    ShieldElement.material = new fc.Material("Orange", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("ORANGE")));
    L05_SpaceInvaders.ShieldElement = ShieldElement;
})(L05_SpaceInvaders || (L05_SpaceInvaders = {}));
//# sourceMappingURL=ShieldElement.js.map