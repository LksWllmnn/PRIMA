"use strict";
var L06_SpaceInvaders;
(function (L06_SpaceInvaders) {
    var fc = FudgeCore;
    class Shield extends fc.Node {
        constructor(_name, _coordinates) {
            super(_name);
            this.coordinates = _coordinates;
        }
        buildShield() {
            this.addComponent(new fc.ComponentTransform());
            for (let i = 0; i < 5; i++) {
                let shieldElement = new L06_SpaceInvaders.ShieldElement("ShieldElement" + i, new fc.Vector3(-0.8 + i * 0.4, 0, 0), new fc.Vector3(0.4, 1.5, 1));
                shieldElement.buildElement();
                this.addChild(shieldElement);
            }
            this.mtxLocal.translateX(this.coordinates.x);
            this.mtxLocal.translateY(this.coordinates.y);
        }
    }
    L06_SpaceInvaders.Shield = Shield;
})(L06_SpaceInvaders || (L06_SpaceInvaders = {}));
//# sourceMappingURL=Shield.js.map