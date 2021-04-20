"use strict";
var L06_SpaceInvaders;
(function (L06_SpaceInvaders) {
    var fc = FudgeCore;
    class Wall extends L06_SpaceInvaders.GameObject {
        //private textScale: fc.Vector2:
        constructor(_name, _coordinates, _scale) {
            super(_name, _coordinates, _scale);
        }
        build() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh();
            let cmpMat = new fc.ComponentMaterial(Wall.material2);
            cmpMat.mtxPivot.scale(new fc.Vector2(this.scale.x, this.scale.y));
            cmpMat.mtxPivot.rotate(0);
            this.addComponent(cmpMat);
        }
    }
    Wall.material = new fc.Material("Blue", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));
    Wall.txtWall = new fc.TextureImage("Assets/CEMPOIS.png");
    Wall.material2 = new fc.Material("WallMat", fc.ShaderTexture, new fc.CoatTextured(fc.Color.CSS(("#FFFFFF"), 0.2), Wall.txtWall));
    L06_SpaceInvaders.Wall = Wall;
})(L06_SpaceInvaders || (L06_SpaceInvaders = {}));
//# sourceMappingURL=WallNew.js.map