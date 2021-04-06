"use strict";
var L04_SpaceInvaders;
(function (L04_SpaceInvaders) {
    var fc = FudgeCore;
    class ShieldElement extends L04_SpaceInvaders.GameObject {
        constructor(_name, _coordinates, _scale) {
            super(_name, _coordinates, _scale);
        }
        buildElement() {
            this.addComponent(new fc.ComponentTransform());
            this.buildMesh();
            let cmpMatBlock = new fc.ComponentMaterial(ShieldElement.material);
            this.addComponent(cmpMatBlock);
            this.mtxLocal.translateX(this.coodrinates.x);
        }
    }
    ShieldElement.material = new fc.Material("Orange", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("ORANGE")));
    L04_SpaceInvaders.ShieldElement = ShieldElement;
})(L04_SpaceInvaders || (L04_SpaceInvaders = {}));
//# sourceMappingURL=ShieldElement.js.map