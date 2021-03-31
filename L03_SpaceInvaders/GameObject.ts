namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    export class GameObject extends fc.Node {
        protected coodrinates: fc.Vector3;
        protected mat: fc.Material;
        protected mesh: fc.Mesh;
        protected scale: fc.Vector2;

        constructor(_name: string, _coordinates: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh, _scale: FudgeCore.Vector2) {
            super(_name);
            this.coodrinates = _coordinates;
            this.mat = _mat;
            this.mesh = _mesh;
            this.scale = _scale;
        }

        build(): void {
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);

            let cmpMesh: fc.ComponentMesh = new fc.ComponentMesh(this.mesh);
            this.addComponent(cmpMesh);
            cmpMesh.mtxPivot.scaleX(this.scale.x);
            cmpMesh.mtxPivot.scaleY(this.scale.y);

            let cmpMat: fc.ComponentMaterial = new fc.ComponentMaterial(this.mat);
            this.addComponent(cmpMat);
        }
    }
}