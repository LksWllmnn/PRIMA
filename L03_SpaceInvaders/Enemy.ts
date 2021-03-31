namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    interface EnemyPosition {
        coordinates: fc.Vector3;
    }

    export let startPosEnemys: EnemyPosition[] = [
        {coordinates: new fc.Vector3(-6, 15, 0)},
        {coordinates: new fc.Vector3(-4, 15, 0)},
        {coordinates: new fc.Vector3(-2, 15, 0)},
        {coordinates: new fc.Vector3(-0, 15, 0)},
        {coordinates: new fc.Vector3(2, 15, 0)},
        {coordinates: new fc.Vector3(4, 15, 0)},
        {coordinates: new fc.Vector3(6, 15, 0)},

        {coordinates: new fc.Vector3(-6, 13, 0)},
        {coordinates: new fc.Vector3(-4, 13, 0)},
        {coordinates: new fc.Vector3(-2, 13, 0)},
        {coordinates: new fc.Vector3(-0, 13, 0)},
        {coordinates: new fc.Vector3(2, 13, 0)},
        {coordinates: new fc.Vector3(4, 13, 0)},
        {coordinates: new fc.Vector3(6, 13, 0)},

        {coordinates: new fc.Vector3(-6, 11, 0)},
        {coordinates: new fc.Vector3(-4, 11, 0)},
        {coordinates: new fc.Vector3(-2, 11, 0)},
        {coordinates: new fc.Vector3(0, 11, 0)},
        {coordinates: new fc.Vector3(2, 11, 0)},
        {coordinates: new fc.Vector3(4, 11, 0)},
        {coordinates: new fc.Vector3(6, 11, 0)}
    ];

    export class Enemy extends GameObject {
        alive: boolean;
        
        constructor(_name: string, _coordinate: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh, _scale: fc.Vector2) {
            super(_name, _coordinate, _mat, _mesh, _scale);
            this.alive = true;
        }
    }
}