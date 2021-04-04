namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    export class Player extends GameObject {

        protected speedShip: number = 5;
        protected reloadTime: number = 5;
        protected canShoot: boolean = true;

        constructor(_name: string, _coodrinates: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh, _scale: fc.Vector2) {
            super(_name, _coodrinates, _mat, _mesh, _scale);
        }

         build(): void {
            let cmpTransform: fc.ComponentTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            
            let cubePlayer: fc.Node = new fc.Node(this.name + " Panzer");
            let cmpTransPlayer: fc.ComponentTransform = new fc.ComponentTransform();
            let cmpPlayer: fc.ComponentMesh = new fc.ComponentMesh(this.mesh);
            let cmpMatCube: fc.ComponentMaterial = new fc.ComponentMaterial(this.mat);
    
            cubePlayer.addComponent(cmpPlayer);
            cubePlayer.addComponent(cmpTransPlayer);
            cubePlayer.addComponent(cmpMatCube);
            cmpPlayer.mtxPivot.scaleY(0.5);
    
            let canon: fc.Node = new fc.Node(this.name + " Canon");
            let cmpTransCanon: fc.ComponentTransform = new fc.ComponentTransform();
            let cmpMeshCanon: fc.ComponentMesh = new fc.ComponentMesh(this.mesh);
            let cmpMatTube: fc.ComponentMaterial = new fc.ComponentMaterial(this.mat);
    
            canon.addComponent(cmpMeshCanon);
            canon.addComponent(cmpTransCanon);
            canon.addComponent(cmpMatTube);
            cmpMeshCanon.mtxPivot.translateY(0.2);
            cmpMeshCanon.mtxPivot.scaleY(0.6);
            cmpMeshCanon.mtxPivot.scaleX(0.2);
            cmpMeshCanon.mtxPivot.scaleZ(0.2);
    
            this.appendChild(canon);
            this.appendChild(cubePlayer);

            this.buildProjectiles();
        }

        moveLeft(): void{
            let offset: number = this.speedShip * fc.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateX(-offset);
            this.coodrinates.x -= offset;
        }

        moveRight(): void{
            let offset: number = this.speedShip * fc.Loop.timeFrameReal / 1000;
            this.cmpTransform.mtxLocal.translateX(offset);
            this.coodrinates.x += offset;
        }

        buildProjectiles(): void {
            let allProjectiles: fc.Node = new fc.Node("all Projectiles");
            for (let iProjectiles: number = 0; iProjectiles < 1; iProjectiles++) {
                let projectile: Projectile = new Projectile("Projectile", this.coodrinates, this.mat, this.mesh, new fc.Vector2(0.01, 0.2));
                projectile.build();
                projectile.activate(false);
                allProjectiles.addChild(projectile);
            }
            this.addChild(allProjectiles);
        }

        shoot(): void {
            let activeProjectile: Projectile = new Projectile("Projectile", this.getCoordinates(), this.mat, this.mesh, new fc.Vector2(0.1, 0.1));
            activeProjectile.build();
            // root.addChild(activeProjectile);
        }

        getCoordinates(): fc.Vector3{
            return this.coodrinates;
        }

        reload(): void {
            fc.Timer
        }
    }
}