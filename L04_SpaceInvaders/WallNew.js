"use strict";
var L04_SpaceInvaders;
(function (L04_SpaceInvaders) {
    var fc = FudgeCore;
    class Wall extends L04_SpaceInvaders.GameObject {
        constructor(_name, _coordinates, _scale) {
            super(_name, _coordinates, _scale);
        }
        build() {
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh();
            let cmpMat = new fc.ComponentMaterial(Wall.material);
            this.addComponent(cmpMat);
        }
    }
    Wall.material = new fc.Material("Blue", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));
    L04_SpaceInvaders.Wall = Wall;
})(L04_SpaceInvaders || (L04_SpaceInvaders = {}));
//# sourceMappingURL=WallNew.js.map