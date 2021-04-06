namespace L04_SpaceInvaders {
    import fc = FudgeCore;

    export class Projectile extends GameObject {

        onField: boolean;
        speed: number = 10;

        constructor(_name: string, _coordinates: fc.Vector3, _scale: fc.Vector3) {
            super(_name, _coordinates, _scale);

            this.onField = false;
        }

        build(): void {
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);

            this.buildMesh();

            let cmpMat: fc.ComponentMaterial = new fc.ComponentMaterial(Player.material);
            this.addComponent(cmpMat);
        }

        fly(): void {
            let offset: number = this.speed * fc.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateY(offset);
            this.coodrinates.y += offset;
        }

        getCoordinates(): fc.Vector3 {
            return this.coodrinates;
        }

        setCoordinates(_coordinates: fc.Vector3): void {
            this.coodrinates = _coordinates;
        }
    }
}