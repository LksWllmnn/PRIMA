"use strict";
var L05_SpaceInvaders;
(function (L05_SpaceInvaders) {
    var fc = FudgeCore;
    class Wall extends L05_SpaceInvaders.GameObject {
        constructor(_name, _coordinates, _scale) {
            super(_name, _coordinates, _scale);
        }
        build() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh();
            let cmpMat = new fc.ComponentMaterial(Wall.material);
            this.addComponent(cmpMat);
        }
    }
    Wall.material = new fc.Material("Blue", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));
    L05_SpaceInvaders.Wall = Wall;
})(L05_SpaceInvaders || (L05_SpaceInvaders = {}));
//# sourceMappingURL=WallNew.js.map