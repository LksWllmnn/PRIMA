namespace L04_SpaceInvaders {
    import fc = FudgeCore;

    export class GameObject extends fc.Node {
        static mesh: fc.Mesh = new fc.MeshCube("Quad");
        static material: fc.Material = new fc.Material("White", fc.ShaderUniColor, new fc.CoatColored());
        
        protected coodrinates: fc.Vector3;
        protected mat: fc.Material;
        protected mesh: fc.Mesh;
        protected scale: fc.Vector3;

        constructor(_name: string, _coordinates: fc.Vector3, _scale: fc.Vector3) {
            super(_name);
            this.coodrinates = _coordinates;
            this.scale = _scale;
        }

        build(): void {
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);

            this.buildMesh(GameObject.mesh);

            let cmpMat: fc.ComponentMaterial = new fc.ComponentMaterial(GameObject.material);
            this.addComponent(cmpMat);
        }

        buildMesh(_meshOfObject: fc.Mesh = GameObject.mesh): void {
            let cmpMesh: fc.ComponentMesh = new fc.ComponentMesh(_meshOfObject);
            this.addComponent(cmpMesh);
            cmpMesh.mtxPivot.scaleX(this.scale.x);
            cmpMesh.mtxPivot.scaleY(this.scale.y);
            cmpMesh.mtxPivot.scaleZ(this.scale.z);
        }
    }
}