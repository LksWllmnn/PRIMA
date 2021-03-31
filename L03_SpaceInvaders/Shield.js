"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    var fc = FudgeCore;
    class Shield extends fc.Node {
        constructor(_name, _coordinates, _mat, _mesh) {
            super(_name);
            this.coordinates = _coordinates;
            this.mat = _mat;
            this.mesh = _mesh;
        }
        buildShield() {
            this.addComponent(new fc.ComponentTransform());
            for (let i = 0; i < 5; i++) {
                let shieldElement = new L03_SpaceInvaders.ShieldElement("ShieldElement" + i, new fc.Vector3(-0.8 + i * 0.4, 0, 0), this.mat, this.mesh, new fc.Vector2(0.4, 1.5));
                shieldElement.buildElement();
                this.addChild(shieldElement);
            }
            this.mtxLocal.translateX(this.coordinates.x);
            this.mtxLocal.translateY(this.coordinates.y);
        }
    }
    L03_SpaceInvaders.Shield = Shield;
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=Shield.js.map