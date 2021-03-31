namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    export class Mothership extends GameObject {
        alive: boolean;
        
        constructor(_name: string, _coordinate: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh, _scale: fc.Vector2) {
            super(_name, _coordinate, _mat, _mesh, _scale);
            this.alive = true;
        }
    }
}