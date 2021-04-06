namespace L04_SpaceInvaders {
    import fc = FudgeCore;

    export class Mothership extends GameObject {
        static material: fc.Material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));

        alive: boolean;
        
        constructor(_name: string, _coordinate: fc.Vector3, _scale: fc.Vector3) {
            super(_name, _coordinate, _scale);
            this.alive = true;
        }

        build(): void {
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);

            this.buildMesh();

            let cmpMat: fc.ComponentMaterial = new fc.ComponentMaterial(Mothership.material);
            this.addComponent(cmpMat);
        }
    }
}