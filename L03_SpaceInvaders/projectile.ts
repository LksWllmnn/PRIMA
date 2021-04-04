namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    export class Projectile extends GameObject {

        onField: boolean;
        speed: number = 10;

        constructor(_name: string, _coordinates: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh, _scale: fc.Vector2) {
            super(_name, _coordinates, _mat, _mesh, _scale);

            this.onField = false;

            //console.log(this.getComponent(fc.ComponentMesh).mtxPivot.scaleX(0.1));
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