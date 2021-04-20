namespace L06_SpaceInvaders {
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

        static txtEnemy: fc.TextureImage = new fc.TextureImage("Assets/DEM1_5.png");
        static material2: fc.Material = new fc.Material("WallMat", fc.ShaderTexture, new fc.CoatTextured(fc.Color.CSS("#FFDDDD", 1), Enemy.txtEnemy));

        alive: boolean;
                
        constructor(_name: string, _coordinate: fc.Vector3, _scale: fc.Vector3) {
            super(_name, _coordinate, _scale);
            this.alive = true;
        }

        build(): void {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);

            this.buildMesh(Enemy.mesh);

            let cmpMat: fc.ComponentMaterial = new fc.ComponentMaterial(Enemy.material2);
            this.addComponent(cmpMat);

            this.buildProjectiles();
        }

        correctCollider(): void {
            this.rect.x = this.mtxWorld.translation.x - this.scale.x / 2;
            this.rect.y = this.mtxWorld.translation.y - this.scale.y / 2;
            //console.log(this.rect.y);
        }

        buildProjectiles(): void {
            let allProjectiles: fc.Node = new fc.Node("all Projectiles");
            for (let iProjectiles: number = 0; iProjectiles < 100; iProjectiles++) { 
                let projectile: Projectile = new Projectile("Projectile", this.coodrinates, new fc.Vector3(0.2, 0.2, 0.2), Enemy.material2);
                projectile.build();
                projectile.activate(false);
                allProjectiles.addChild(projectile);

                //console.log(projectile.rect);
            }
            this.addChild(allProjectiles); 
        }

        shoot(_nextBullet: Projectile): void { 
            this.getChild(0).removeChild(_nextBullet);
            rootEnemyProjectiles.addChild(_nextBullet);
            //ableToShoot = false;
            if (audioAllowed) {
                peng = <HTMLAudioElement>document.getElementById("Peng");
                peng.src = "assets/Peng.mp3";
                peng.play();
            }
            
        }
    }
}