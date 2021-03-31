namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    export class Wall extends GameObject {

        constructor(_name: string, _coordinates: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh, _scale: fc.Vector2) {
            super(_name, _coordinates, _mat, _mesh, _scale);
        }
    }
}