namespace L05_SpaceInvaders {
    import fc = FudgeCore;

    export class Shield extends fc.Node {
        private coordinates: fc.Vector3;
        

        constructor(_name: string, _coordinates: fc.Vector3 ) {
            super(_name);
            this.coordinates = _coordinates;
        }

        buildShield(): void {
            this.addComponent(new fc.ComponentTransform());

            for (let i: number = 0; i < 5; i++) {
                let shieldElement: ShieldElement = new ShieldElement("ShieldElement" + i, new fc.Vector3(-0.8 + i * 0.4, 0, 0), new fc.Vector3(0.4, 1.5, 1));
                shieldElement.buildElement();
                this.addChild(shieldElement);
            }
            this.mtxLocal.translateX(this.coordinates.x);
            this.mtxLocal.translateY(this.coordinates.y);
        }
    }
}