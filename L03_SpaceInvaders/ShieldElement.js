"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    var fc = FudgeCore;
    class ShieldElement extends L03_SpaceInvaders.GameObject {
        constructor(_name, _coordinates, _mat, _mesh, _scale) {
            super(_name, _coordinates, _mat, _mesh, _scale);
        }
        buildElement() {
            this.addComponent(new fc.ComponentTransform());
            let cmpBlock = new fc.ComponentMesh(this.mesh);
            let cmpMatBlock = new fc.ComponentMaterial(this.mat);
            this.addComponent(cmpBlock);
            this.addComponent(cmpMatBlock);
            cmpBlock.mtxPivot.scaleY(this.scale.y);
            cmpBlock.mtxPivot.scaleX(this.scale.x);
            this.mtxLocal.translateX(this.coodrinates.x);
        }
    }
    L03_SpaceInvaders.ShieldElement = ShieldElement;
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=ShieldElement.js.map