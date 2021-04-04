"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    var fc = FudgeCore;
    class Player extends L03_SpaceInvaders.GameObject {
        constructor(_name, _coodrinates, _mat, _mesh, _scale) {
            super(_name, _coodrinates, _mat, _mesh, _scale);
            this.speedShip = 5;
            this.reloadTime = 5;
            this.canShoot = true;
        }
        build() {
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            let cubePlayer = new fc.Node(this.name + " Panzer");
            let cmpTransPlayer = new fc.ComponentTransform();
            let cmpPlayer = new fc.ComponentMesh(this.mesh);
            let cmpMatCube = new fc.ComponentMaterial(this.mat);
            cubePlayer.addComponent(cmpPlayer);
            cubePlayer.addComponent(cmpTransPlayer);
            cubePlayer.addComponent(cmpMatCube);
            cmpPlayer.mtxPivot.scaleY(0.5);
            let canon = new fc.Node(this.name + " Canon");
            let cmpTransCanon = new fc.ComponentTransform();
            let cmpMeshCanon = new fc.ComponentMesh(this.mesh);
            let cmpMatTube = new fc.ComponentMaterial(this.mat);
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
        moveLeft() {
            let offset = this.speedShip * fc.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateX(-offset);
            this.coodrinates.x -= offset;
        }
        moveRight() {
            let offset = this.speedShip * fc.Loop.timeFrameReal / 1000;
            this.cmpTransform.mtxLocal.translateX(offset);
            this.coodrinates.x += offset;
        }
        buildProjectiles() {
            let allProjectiles = new fc.Node("all Projectiles");
            for (let iProjectiles = 0; iProjectiles < 1; iProjectiles++) {
                let projectile = new L03_SpaceInvaders.Projectile("Projectile", this.coodrinates, this.mat, this.mesh, new fc.Vector2(0.01, 0.2));
                projectile.build();
                projectile.activate(false);
                allProjectiles.addChild(projectile);
            }
            this.addChild(allProjectiles);
        }
        shoot() {
            let activeProjectile = new L03_SpaceInvaders.Projectile("Projectile", this.getCoordinates(), this.mat, this.mesh, new fc.Vector2(0.1, 0.1));
            activeProjectile.build();
            // root.addChild(activeProjectile);
        }
        getCoordinates() {
            return this.coodrinates;
        }
        reload() {
            fc.Timer;
        }
    }
    L03_SpaceInvaders.Player = Player;
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=Player.js.map