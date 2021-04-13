namespace L05_SpaceInvaders {
    import fc = FudgeCore;

    export class ShieldElement extends GameObject {
        static material: fc.Material = new fc.Material("Orange", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("ORANGE")));

        constructor(_name: string, _coordinates: fc.Vector3, _scale: fc.Vector3) {
            super(_name, _coordinates,  _scale);
        }

        buildElement(): void {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            
            this.addComponent(new fc.ComponentTransform());
            
            this.buildMesh();
            
            let cmpMatBlock: fc.ComponentMaterial = new fc.ComponentMaterial(ShieldElement.material);
            this.addComponent(cmpMatBlock);
            
            this.mtxLocal.translateX(this.coodrinates.x);

        }
    }
}