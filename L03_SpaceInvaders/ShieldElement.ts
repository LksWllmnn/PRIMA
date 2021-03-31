namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    export class ShieldElement extends GameObject {

        constructor(_name: string, _coordinates: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh, _scale: fc.Vector2) {
            super(_name, _coordinates, _mat, _mesh, _scale);
        }

        buildElement(): void {
            this.addComponent(new fc.ComponentTransform());
            let cmpBlock: fc.ComponentMesh = new fc.ComponentMesh(this.mesh);
            let cmpMatBlock: fc.ComponentMaterial = new fc.ComponentMaterial(this.mat);

            this.addComponent(cmpBlock);
            this.addComponent(cmpMatBlock);
            cmpBlock.mtxPivot.scaleY(this.scale.y);
            cmpBlock.mtxPivot.scaleX(this.scale.x);
            this.mtxLocal.translateX(this.coodrinates.x);
        }
    }
}