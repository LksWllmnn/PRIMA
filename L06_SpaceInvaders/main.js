"use strict";
var L06_SpaceInvaders;
(function (L06_SpaceInvaders) {
    var fc = FudgeCore;
    let viewport = new fc.Viewport();
    //Wurzel erstellen
    L06_SpaceInvaders.root = new fc.Node("Root");
    L06_SpaceInvaders.root.addComponent(new fc.ComponentTransform());
    L06_SpaceInvaders.rootProjectiles = new fc.Node("ProjectileRoot");
    L06_SpaceInvaders.rootProjectiles.addComponent(new fc.ComponentTransform());
    L06_SpaceInvaders.root.addChild(L06_SpaceInvaders.rootProjectiles);
    L06_SpaceInvaders.rootEnemyProjectiles = new fc.Node("Enemy Projectiles");
    L06_SpaceInvaders.rootEnemyProjectiles.addComponent(new fc.ComponentTransform());
    L06_SpaceInvaders.root.addChild(L06_SpaceInvaders.rootEnemyProjectiles);
    let enemyShoots = false;
    let shootingEnemy;
    let shootingEnemyBullet;
    let wallsCollection;
    //Skripte nach laden des HTML aktivieren
    window.addEventListener("load", hndlLoad);
    /*let musicPlays: boolean = false;
    if (!musicPlays)
        window.addEventListener("keydown", hndlPlayMusic);*/
    let backgroundAudio;
    let explosion;
    let buttonMusic;
    L06_SpaceInvaders.audioAllowed = false;
    let bulletsCounter;
    let invadersSmall;
    let enemysMoveLeft = false;
    let enemysMoveDown = false;
    let enemysMoveDownStartPosition = 0;
    //Schiff erstellen
    let player = buildPlayerOnMap();
    L06_SpaceInvaders.ableToShoot = true;
    let magazineLength;
    let nextBullet;
    function hndlLoad(_event) {
        console.log("hi");
        buttonMusic = document.getElementById("MusicButton");
        if (buttonMusic) {
            buttonMusic.addEventListener("click", hndlMusic);
        }
        bulletsCounter = document.getElementById("Bullets");
        fc.Time.game.setTimer(500, 0, hndlReload);
        const canvas = document.querySelector("canvas");
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Walls
        buildWallsOnMap();
        //Shields
        buildShieldsOnMap();
        //Enemys
        buildEnemysOnMap();
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Camera
        let cmpCamera = new fc.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.rotateY(180);
        cmpCamera.mtxPivot.rotateX(-15);
        //Camera an Viewport anheften
        viewport.initialize("Viewport", L06_SpaceInvaders.root, cmpCamera, canvas);
        //Loop
        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 30);
        fc.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
    }
    function buildWallsOnMap() {
        wallsCollection = new fc.Node("All Walls");
        let topWall = new L06_SpaceInvaders.Wall("Top Wall", new fc.Vector3(0, 18.5, 0), new fc.Vector3(20, 1, 1));
        topWall.build();
        wallsCollection.addChild(topWall);
        let bottomWall = new L06_SpaceInvaders.Wall("Bottom Wall", new fc.Vector3(0, -1.5, 0), new fc.Vector3(20, 1, 1));
        bottomWall.build();
        wallsCollection.addChild(bottomWall);
        let leftWall = new L06_SpaceInvaders.Wall("Left Wall", new fc.Vector3(-10, 8.5, 0), new fc.Vector3(1, 20, 1));
        leftWall.build();
        wallsCollection.addChild(leftWall);
        let rightWall = new L06_SpaceInvaders.Wall("Right Wall", new fc.Vector3(10, 8.5, 0), new fc.Vector3(1, 20, 1));
        rightWall.build();
        wallsCollection.addChild(rightWall);
        L06_SpaceInvaders.root.addChild(wallsCollection);
    }
    function buildEnemysOnMap() {
        let enemysCollection = new fc.Node("All Enemys");
        let mothership = new L06_SpaceInvaders.Mothership("Mothership", new fc.Vector3(6, 16.5, 0), new fc.Vector3(2, 1, 1));
        mothership.build();
        enemysCollection.addChild(mothership);
        invadersSmall = new fc.Node("Small Invaders");
        invadersSmall.addComponent(new fc.ComponentTransform());
        for (let i = 0; i < 21; i++) {
            let newEnemy = new L06_SpaceInvaders.Enemy("Enemy", L06_SpaceInvaders.startPosEnemys[i].coordinates, new fc.Vector3(1, 1, 1));
            newEnemy.build();
            invadersSmall.addChild(newEnemy);
        }
        enemysCollection.addChild(invadersSmall);
        L06_SpaceInvaders.root.addChild(enemysCollection);
    }
    function buildPlayerOnMap() {
        let player = new L06_SpaceInvaders.Player("Player", new fc.Vector3(0, 0, 0), new fc.Vector3(1, 1, 1));
        player.build();
        L06_SpaceInvaders.root.addChild(player);
        return player;
    }
    function buildShieldsOnMap() {
        let shieldsCollection = new fc.Node("All Shields");
        let shieldPositions = [new fc.Vector3(-6, 2, 0), new fc.Vector3(-2, 2, 0), new fc.Vector3(2, 2, 0), new fc.Vector3(6, 2, 0)];
        for (let iShields = 0; iShields < 4; iShields++) {
            let shield = new L06_SpaceInvaders.Shield("Shield", shieldPositions[iShields]);
            shield.buildShield();
            shieldsCollection.addChild(shield);
        }
        L06_SpaceInvaders.root.addChild(shieldsCollection);
    }
    function update(_event) {
        //root.mtxLocal.rotateY(1);
        magazineLength = player.getChild(2).getChildren().length;
        nextBullet = player.getChild(2).getChild(player.getChild(2).getChildren().length - 1);
        //Bullet counter
        if (bulletsCounter) {
            if (L06_SpaceInvaders.ableToShoot && magazineLength > 0) {
                bulletsCounter.innerHTML = "Bullets: " + magazineLength + " READY TO SHOOT";
            }
            else if (!L06_SpaceInvaders.ableToShoot && magazineLength > 0) {
                bulletsCounter.innerHTML = "Bullets: " + magazineLength + " RELOAD";
            }
            else if (L06_SpaceInvaders.ableToShoot && magazineLength == 0) {
                bulletsCounter.innerHTML = "Bullets: " + magazineLength + " ... Your empty...";
            }
        }
        //bullets movement
        for (let projectile of L06_SpaceInvaders.rootProjectiles.getChildren()) {
            projectile.fly();
            if (projectile.mtxLocal.translation.y > 17.5)
                L06_SpaceInvaders.rootProjectiles.removeChild(projectile);
        }
        //Enemy bullets
        for (let enemyProjectile of L06_SpaceInvaders.rootEnemyProjectiles.getChildren()) {
            enemyProjectile.flyEnemy();
            if (enemyProjectile.mtxLocal.translation.y < -1.5)
                L06_SpaceInvaders.rootEnemyProjectiles.removeChild(enemyProjectile);
        }
        //move Ship
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.A, fc.KEYBOARD_CODE.ARROW_LEFT])) {
            player.moveLeft();
        }
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.D, fc.KEYBOARD_CODE.ARROW_RIGHT])) {
            player.moveRight();
        }
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.SPACE]) && L06_SpaceInvaders.ableToShoot == true) {
            //console.log("beim schießen");
            L06_SpaceInvaders.ableToShoot = false;
            player.shoot(nextBullet);
            nextBullet.mtxLocal.translateX(player.mtxLocal.translation.x - nextBullet.mtxLocal.translation.x);
        }
        if (enemyShoots) {
            enemyShoots = false;
            shootingEnemyBullet = shootingEnemy.getChild(0).getChild(shootingEnemy.getChildren().length - 1);
            shootingEnemy.shoot(shootingEnemyBullet);
            shootingEnemyBullet.mtxLocal.translateX(shootingEnemy.mtxWorld.translation.x - shootingEnemyBullet.mtxLocal.translation.x);
            shootingEnemyBullet.mtxLocal.translateY(shootingEnemy.mtxWorld.translation.y - shootingEnemyBullet.mtxLocal.translation.y);
        }
        enemyMovement();
        checkProjectileCollision();
        enemyCorrectCollisionBox();
        shouldEnemyShootAndWhichOne();
        viewport.draw();
    }
    function hndlReload() {
        L06_SpaceInvaders.ableToShoot = true;
    }
    function checkProjectileCollision() {
        for (let projectile of L06_SpaceInvaders.rootProjectiles.getChildren()) {
            for (let invader of invadersSmall.getChildren()) {
                if (projectile.gotShot(invader)) {
                    L06_SpaceInvaders.rootProjectiles.removeChild(projectile);
                    invadersSmall.removeChild(invader);
                    if (L06_SpaceInvaders.audioAllowed) {
                        explosion = document.getElementById("Explosion");
                        explosion.src = "assets/gotShot.mp3";
                        explosion.play();
                    }
                }
            }
        }
    }
    function checkEnemyWallCollision() {
        for (let invader of invadersSmall.getChildren()) {
            for (let wall of wallsCollection.getChildren()) {
                if (wall.gotShot(invader)) {
                    if (wall.name == "Left Wall") {
                        return "l";
                    }
                    if (wall.name == "Right Wall") {
                        return "r";
                    }
                }
            }
        }
        return "nix";
    }
    function enemyMovement() {
        let enemySpeed = 0.05;
        //console.log(checkEnemyWallCollision());
        if (enemysMoveLeft == false && enemysMoveDown == false) {
            invadersSmall.mtxLocal.translateX(enemySpeed);
        }
        if (checkEnemyWallCollision() == "r" && enemysMoveLeft == false && enemysMoveDown == false) {
            enemysMoveDownStartPosition = invadersSmall.mtxLocal.translation.y;
            enemysMoveLeft = true;
            enemysMoveDown = true;
        }
        if (enemysMoveLeft == true && enemysMoveDown == false) {
            invadersSmall.mtxLocal.translateX(-enemySpeed);
        }
        if (checkEnemyWallCollision() == "l" && enemysMoveLeft == true && enemysMoveDown == false) {
            enemysMoveDownStartPosition = invadersSmall.mtxLocal.translation.y;
            enemysMoveLeft = false;
            enemysMoveDown = true;
        }
        if (enemysMoveDown && invadersSmall.mtxLocal.translation.y - enemysMoveDownStartPosition >= -0.5) {
            invadersSmall.mtxLocal.translateY(-enemySpeed);
        }
        if (enemysMoveDown && invadersSmall.mtxLocal.translation.y - enemysMoveDownStartPosition < -0.5) {
            enemysMoveDown = false;
        }
    }
    function enemyCorrectCollisionBox() {
        for (let invader of invadersSmall.getChildren()) {
            invader.correctCollider();
        }
    }
    function shouldEnemyShootAndWhichOne() {
        let random = Math.random();
        if (random >= 0.98) {
            enemyShoots = true;
            let activeEnemys = invadersSmall.getChildren();
            let randomEnemy = Math.random() * activeEnemys.length;
            shootingEnemy = activeEnemys[Math.round(randomEnemy)];
        }
    }
    /*function hndlPlayMusic(): void {
        musicPlays = true;
        
        let musicManager: fc.AudioManager = new fc.AudioManager();
        //musicManager.createMediaElementSource
        console.log(musicManager);

        let music: fc.Audio = new fc.Audio("Feels - Patrick Patrikios.mp3");
        console.log(music);
        let musicCmp: fc.ComponentAudio = new fc.ComponentAudio(music, false, true);
        musicCmp.activate(true);
        //let musicManager = fc.AudioManager = new fc.AudioManager()
    }*/
    function hndlMusic() {
        L06_SpaceInvaders.audioAllowed = !L06_SpaceInvaders.audioAllowed;
        if (L06_SpaceInvaders.audioAllowed) {
            buttonMusic.innerHTML = "Music Button (Music on)";
            backgroundAudio = document.getElementById("BackgroundMusic");
            if (backgroundAudio) {
                backgroundAudio.src = "assets/Feels - Patrick Patrikios.mp3";
                backgroundAudio.play();
            }
        }
        else {
            backgroundAudio.pause();
            buttonMusic.innerHTML = "Music Button (Music off)";
        }
    }
})(L06_SpaceInvaders || (L06_SpaceInvaders = {}));
//# sourceMappingURL=main.js.map