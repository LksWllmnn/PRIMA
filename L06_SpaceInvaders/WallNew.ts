namespace L06_SpaceInvaders {
    import fc = FudgeCore;

    export class Wall extends GameObject {
        
        static material: fc.Material = new fc.Material("Blue", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));

        static txtWall: fc.TextureImage = new fc.TextureImage("Assets/CEMPOIS.png");
        static material2: fc.Material = new fc.Material("WallMat", fc.ShaderTexture, new fc.CoatTextured(fc.Color.CSS(("#FFFFFF"), 0.2), Wall.txtWall));

        //private textScale: fc.Vector2:

        constructor(_name: string, _coordinates: fc.Vector3, _scale: fc.Vector3) {
            super(_name, _coordinates, _scale);
        }

        build(): void {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);

            this.buildMesh();

            let cmpMat: fc.ComponentMaterial = new fc.ComponentMaterial(Wall.material2);
            cmpMat.mtxPivot.scale(new fc.Vector2(this.scale.x, this.scale.y));
            cmpMat.mtxPivot.rotate(0);
            this.addComponent(cmpMat);
        }
    }
}