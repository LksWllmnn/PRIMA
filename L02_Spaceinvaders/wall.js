"use strict";
var L02_SpaceInvaders;
(function (L02_SpaceInvaders) {
    var fc = FudgeCore;
    class Wall {
        constructor(_name, _xPos, _yPos, _width, _height) {
            this.name = _name;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.width = _width;
            this.height = _height;
        }
        buildWall() {
            let wallMat = new fc.Material("Blue", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));
            let cmpWallMat = new fc.ComponentMaterial(wallMat);
            let wall = new fc.Node(this.name + "Wall");
            let meshWall = new fc.MeshCube();
            let cmpWall = new fc.ComponentMesh(meshWall);
            let cmpTransWall = new fc.ComponentTransform();
            wall.addComponent(cmpWall);
            wall.addComponent(cmpTransWall);
            cmpTransWall.mtxLocal.translateY(this.yPos);
            cmpTransWall.mtxLocal.translateX(this.xPos);
            cmpWall.mtxPivot.scaleX(this.width);
            cmpWall.mtxPivot.scaleY(this.height);
            wall.addComponent(cmpWallMat);
            L02_SpaceInvaders.root.appendChild(wall);
        }
    }
    L02_SpaceInvaders.Wall = Wall;
})(L02_SpaceInvaders || (L02_SpaceInvaders = {}));
//# sourceMappingURL=wall.js.map