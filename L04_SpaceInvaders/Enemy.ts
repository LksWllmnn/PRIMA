namespace L04_SpaceInvaders {
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
        static mesh: fc.MeshSphere = new fc.MeshSphere("EnemyMesh", 6, 6);
        static material: fc.Material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
        alive: boolean;
                
        constructor(_name: string, _coordinate: fc.Vector3, _scale: fc.Vector3) {
            super(_name, _coordinate, _scale);
            this.alive = true;
        }

        build(): void {
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);

            this.buildMesh(Enemy.mesh);

            let cmpMat: fc.ComponentMaterial = new fc.ComponentMaterial(Enemy.material);
            this.addComponent(cmpMat);
        }
    }
}