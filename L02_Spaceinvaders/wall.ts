namespace L02_SpaceInvaders {
    import fc = FudgeCore;

    export class Wall {
        name: String;
        xPos: number;
        yPos: number;
        width: number;
        height: number;

        constructor(_name: String, _xPos: number, _yPos: number, _width: number, _height: number) {
            this.name = _name;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.width = _width;
            this.height = _height;
        }

        buildWall(): void {
            let wallMat: fc.Material = new fc.Material("Blue", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));
            let cmpWallMat: fc.ComponentMaterial = new fc.ComponentMaterial(wallMat);
            
            let wall: fc.Node = new fc.Node(this.name + "Wall");
            let meshWall: fc.MeshCube = new fc.MeshCube();
            let cmpWall: fc.ComponentMesh = new fc.ComponentMesh(meshWall);
            let cmpTransWall: fc.ComponentTransform = new fc.ComponentTransform();
            
            wall.addComponent(cmpWall);
            wall.addComponent(cmpTransWall);     
            cmpTransWall.mtxLocal.translateY(this.yPos);
            cmpTransWall.mtxLocal.translateX(this.xPos);
            cmpWall.mtxPivot.scaleX(this.width);
            cmpWall.mtxPivot.scaleY(this.height);
            wall.addComponent(cmpWallMat);
            root.appendChild(wall);
        }
    }
}