namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    export class Shield extends fc.Node {
        private coordinates: fc.Vector3;
        private mat: fc.Material;
        private mesh: fc.Mesh;

        constructor(_name: string, _coordinates: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh ) {
            super(_name);
            this.coordinates = _coordinates;
            this.mat = _mat;
            this.mesh = _mesh;
        }

        buildShield(): void {
            this.addComponent(new fc.ComponentTransform());

            for (let i: number = 0; i < 5; i++) {
                let shieldElement: ShieldElement = new ShieldElement("ShieldElement" + i, new fc.Vector3(-0.8 + i * 0.4, 0, 0), this.mat, this.mesh, new fc.Vector2(0.4, 1.5));
                shieldElement.buildElement();
                this.addChild(shieldElement);
            }
            this.mtxLocal.translateX(this.coordinates.x);
            this.mtxLocal.translateY(this.coordinates.y);
        }
    }
}