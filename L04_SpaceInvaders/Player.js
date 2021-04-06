"use strict";
var L04_SpaceInvaders;
(function (L04_SpaceInvaders) {
    var fc = FudgeCore;
    class Player extends L04_SpaceInvaders.GameObject {
        constructor(_name, _coodrinates, _scale) {
            super(_name, _coodrinates, _scale);
            this.speedShip = 5;
            this.reloadTime = 5;
            this.canShoot = true;
        }
        build() {
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            ///////////////////////////////////////////////////////////////////////
            let cubePlayer = new fc.Node(this.name + " Panzer");
            let cmpTransPlayer = new fc.ComponentTransform();
            cubePlayer.addComponent(cmpTransPlayer);
            let cmpPlayer = new fc.ComponentMesh(Player.mesh);
            cubePlayer.addComponent(cmpPlayer);
            cmpPlayer.mtxPivot.scaleY(0.5);
            let cmpMatCube = new fc.ComponentMaterial(Player.material);
            cubePlayer.addComponent(cmpMatCube);
            this.appendChild(cubePlayer);
            ///////////////////////////////////////////////////////////////////////
            let canon = new fc.Node(this.name + " Canon");
            let cmpTransCanon = new fc.ComponentTransform();
            canon.addComponent(cmpTransCanon);
            let cmpMeshCanon = new fc.ComponentMesh(Player.mesh);
            canon.addComponent(cmpMeshCanon);
            cmpMeshCanon.mtxPivot.translateY(0.2);
            cmpMeshCanon.mtxPivot.scaleY(0.6);
            cmpMeshCanon.mtxPivot.scaleX(0.2);
            cmpMeshCanon.mtxPivot.scaleZ(0.2);
            let cmpMatTube = new fc.ComponentMaterial(Player.material);
            canon.addComponent(cmpMatTube);
            this.appendChild(canon);
            ////////////////////////////////////////////////////////////////////////////
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
                let projectile = new L04_SpaceInvaders.Projectile("Projectile", this.coodrinates, new fc.Vector3(0.01, 0.2, 0.1));
                projectile.build();
                projectile.activate(false);
                allProjectiles.addChild(projectile);
            }
            this.addChild(allProjectiles);
        }
        shoot() {
            let activeProjectile = new L04_SpaceInvaders.Projectile("Projectile", this.getCoordinates(), new fc.Vector3(0.1, 0.1, 0.1));
            activeProjectile.build();
            // root.addChild(activeProjectile);
        }
        getCoordinates() {
            return this.coodrinates;
        }
    }
    Player.mesh = new fc.MeshCube("Quad");
    Player.material = new fc.Material("Green", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("GREEN")));
    L04_SpaceInvaders.Player = Player;
})(L04_SpaceInvaders || (L04_SpaceInvaders = {}));
//# sourceMappingURL=Player.js.map