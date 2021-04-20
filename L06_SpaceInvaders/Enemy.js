"use strict";
var L06_SpaceInvaders;
(function (L06_SpaceInvaders) {
    var fc = FudgeCore;
    L06_SpaceInvaders.startPosEnemys = [
        { coordinates: new fc.Vector3(-6, 15, 0) },
        { coordinates: new fc.Vector3(-4, 15, 0) },
        { coordinates: new fc.Vector3(-2, 15, 0) },
        { coordinates: new fc.Vector3(-0, 15, 0) },
        { coordinates: new fc.Vector3(2, 15, 0) },
        { coordinates: new fc.Vector3(4, 15, 0) },
        { coordinates: new fc.Vector3(6, 15, 0) },
        { coordinates: new fc.Vector3(-6, 13, 0) },
        { coordinates: new fc.Vector3(-4, 13, 0) },
        { coordinates: new fc.Vector3(-2, 13, 0) },
        { coordinates: new fc.Vector3(-0, 13, 0) },
        { coordinates: new fc.Vector3(2, 13, 0) },
        { coordinates: new fc.Vector3(4, 13, 0) },
        { coordinates: new fc.Vector3(6, 13, 0) },
        { coordinates: new fc.Vector3(-6, 11, 0) },
        { coordinates: new fc.Vector3(-4, 11, 0) },
        { coordinates: new fc.Vector3(-2, 11, 0) },
        { coordinates: new fc.Vector3(0, 11, 0) },
        { coordinates: new fc.Vector3(2, 11, 0) },
        { coordinates: new fc.Vector3(4, 11, 0) },
        { coordinates: new fc.Vector3(6, 11, 0) }
    ];
    class Enemy extends L06_SpaceInvaders.GameObject {
        constructor(_name, _coordinate, _scale) {
            super(_name, _coordinate, _scale);
            this.alive = true;
        }
        build() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh(Enemy.mesh);
            let cmpMat = new fc.ComponentMaterial(Enemy.material2);
            this.addComponent(cmpMat);
            this.buildProjectiles();
        }
        correctCollider() {
            this.rect.x = this.mtxWorld.translation.x - this.scale.x / 2;
            this.rect.y = this.mtxWorld.translation.y - this.scale.y / 2;
            //console.log(this.rect.y);
        }
        buildProjectiles() {
            let allProjectiles = new fc.Node("all Projectiles");
            for (let iProjectiles = 0; iProjectiles < 100; iProjectiles++) {
                let projectile = new L06_SpaceInvaders.Projectile("Projectile", this.coodrinates, new fc.Vector3(0.2, 0.2, 0.2), Enemy.material2);
                projectile.build();
                projectile.activate(false);
                allProjectiles.addChild(projectile);
                //console.log(projectile.rect);
            }
            this.addChild(allProjectiles);
        }
        shoot(_nextBullet) {
            this.getChild(0).removeChild(_nextBullet);
            L06_SpaceInvaders.rootEnemyProjectiles.addChild(_nextBullet);
            //ableToShoot = false;
            if (L06_SpaceInvaders.audioAllowed) {
                L06_SpaceInvaders.peng = document.getElementById("Peng");
                L06_SpaceInvaders.peng.src = "assets/Peng.mp3";
                L06_SpaceInvaders.peng.play();
            }
        }
    }
    Enemy.mesh = new fc.MeshSphere("EnemyMesh", 6, 6);
    Enemy.material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
    Enemy.txtEnemy = new fc.TextureImage("Assets/DEM1_5.png");
    Enemy.material2 = new fc.Material("WallMat", fc.ShaderTexture, new fc.CoatTextured(fc.Color.CSS("#FFDDDD", 1), Enemy.txtEnemy));
    L06_SpaceInvaders.Enemy = Enemy;
})(L06_SpaceInvaders || (L06_SpaceInvaders = {}));
//# sourceMappingURL=Enemy.js.map