namespace L04_SpaceInvaders {
    import fc = FudgeCore;

    export class Player extends GameObject {
        static mesh: fc.Mesh = new fc.MeshCube("Quad");
        static material: fc.Material = new fc.Material("Green", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("GREEN")));

        //static projectileList: Projectile[];

        protected speedShip: number = 5;
        protected reloadTime: number = 5;
        protected canShoot: boolean = true;

        constructor(_name: string, _coodrinates: fc.Vector3, _scale: fc.Vector3) {
            super(_name, _coodrinates, _scale);
        }

         build(): void {
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            
            ///////////////////////////////////////////////////////////////////////
            let cubePlayer: fc.Node = new fc.Node(this.name + " Panzer");

            let cmpTransPlayer: fc.ComponentTransform = new fc.ComponentTransform();
            cubePlayer.addComponent(cmpTransPlayer);

            let cmpPlayer: fc.ComponentMesh = new fc.ComponentMesh(Player.mesh);
            cubePlayer.addComponent(cmpPlayer);
            cmpPlayer.mtxPivot.scaleY(0.5);
            
            let cmpMatCube: fc.ComponentMaterial = new fc.ComponentMaterial(Player.material);
            cubePlayer.addComponent(cmpMatCube);
    
            this.appendChild(cubePlayer);
            ///////////////////////////////////////////////////////////////////////
            let canon: fc.Node = new fc.Node(this.name + " Canon");

            let cmpTransCanon: fc.ComponentTransform = new fc.ComponentTransform();
            canon.addComponent(cmpTransCanon);

            let cmpMeshCanon: fc.ComponentMesh = new fc.ComponentMesh(Player.mesh);
            canon.addComponent(cmpMeshCanon);
            cmpMeshCanon.mtxPivot.translateY(0.2);
            cmpMeshCanon.mtxPivot.scaleY(0.6);
            cmpMeshCanon.mtxPivot.scaleX(0.2);
            cmpMeshCanon.mtxPivot.scaleZ(0.2);

            let cmpMatTube: fc.ComponentMaterial = new fc.ComponentMaterial(Player.material);
            canon.addComponent(cmpMatTube);
    
            this.appendChild(canon);
            
            ////////////////////////////////////////////////////////////////////////////
            this.buildProjectiles();
        }

        moveLeft(): void {
            let offset: number = this.speedShip * fc.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateX(-offset);
            this.coodrinates.x -= offset;
        }

        moveRight(): void {
            let offset: number = this.speedShip * fc.Loop.timeFrameReal / 1000;
            this.cmpTransform.mtxLocal.translateX(offset);
            this.coodrinates.x += offset;
        }

        buildProjectiles(): void {
            let allProjectiles: fc.Node = new fc.Node("all Projectiles");
            for (let iProjectiles: number = 0; iProjectiles < 100; iProjectiles++) { 
                let projectile: Projectile = new Projectile("Projectile", this.coodrinates, new fc.Vector3(0.2, 0.2, 0.2));
                projectile.build();
                projectile.activate(false);
                allProjectiles.addChild(projectile);
            }
            this.addChild(allProjectiles);
        }

        shoot(_nextBullet: Projectile): void { 
            this.getChild(2).removeChild(_nextBullet);
            root.addChild(_nextBullet);
            ableToShoot = false;
        }

        getCoordinates(): fc.Vector3 {
            return this.coodrinates;
        }

        /*reload(): void {
            let time: fc.Time = new fc.Time();
            let timeHander: fc.TimerHandler;
            let reload: fc.Timer = new fc.Timer(time, 1000, 1, timeHander);
            console.log(reload);
        }*/
    }
}