"use strict";
var L04_SpaceInvaders;
(function (L04_SpaceInvaders) {
    var fc = FudgeCore;
    let viewport = new fc.Viewport();
    //Wurzel erstellen
    L04_SpaceInvaders.root = new fc.Node("Root");
    L04_SpaceInvaders.root.addComponent(new fc.ComponentTransform());
    //Skripte nach laden des HTML aktivieren
    window.addEventListener("load", hndlLoad);
    //Schiff erstellen
    let player = buildPlayerOnMap();
    L04_SpaceInvaders.ableToShoot = true;
    let activeProjectile = new L04_SpaceInvaders.Projectile("Projectile", player.getCoordinates(), new fc.Vector3(0.2, 0.2, 0.2));
    activeProjectile.build();
    activeProjectile.activate(false);
    L04_SpaceInvaders.root.addChild(activeProjectile);
    function hndlLoad(_event) {
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
        viewport.initialize("Viewport", L04_SpaceInvaders.root, cmpCamera, canvas);
        //Loop
        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 30);
        fc.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        console.log(L04_SpaceInvaders.root);
        console.log(activeProjectile.mtxLocal);
    }
    function buildWallsOnMap() {
        let wallsCollection = new fc.Node("All Walls");
        let topWall = new L04_SpaceInvaders.Wall("Top Wall", new fc.Vector3(0, 18.5, 0), new fc.Vector3(20, 1, 1));
        topWall.build();
        wallsCollection.addChild(topWall);
        let bottomWall = new L04_SpaceInvaders.Wall("Bottom Wall", new fc.Vector3(0, -1.5, 0), new fc.Vector3(20, 1, 1));
        bottomWall.build();
        wallsCollection.addChild(bottomWall);
        let leftWall = new L04_SpaceInvaders.Wall("Left Wall", new fc.Vector3(-10, 8.5, 0), new fc.Vector3(1, 20, 1));
        leftWall.build();
        wallsCollection.addChild(leftWall);
        let rightWall = new L04_SpaceInvaders.Wall("Right Wall", new fc.Vector3(10, 8.5, 0), new fc.Vector3(1, 20, 1));
        rightWall.build();
        wallsCollection.addChild(rightWall);
        L04_SpaceInvaders.root.addChild(wallsCollection);
    }
    function buildEnemysOnMap() {
        let enemysCollection = new fc.Node("All Enemys");
        let mothership = new L04_SpaceInvaders.Mothership("Mothership", new fc.Vector3(6, 16.5, 0), new fc.Vector3(2, 1, 1));
        mothership.build();
        enemysCollection.addChild(mothership);
        let invadersSmall = new fc.Node("Small Invaders");
        for (let i = 0; i < 21; i++) {
            let newEnemy = new L04_SpaceInvaders.Enemy("Enemy", L04_SpaceInvaders.startPosEnemys[i].coordinates, new fc.Vector3(1, 1, 1));
            newEnemy.build();
            invadersSmall.addChild(newEnemy);
        }
        enemysCollection.addChild(invadersSmall);
        L04_SpaceInvaders.root.addChild(enemysCollection);
    }
    function buildPlayerOnMap() {
        let player = new L04_SpaceInvaders.Player("Player", new fc.Vector3(0, 0, 0), new fc.Vector3(1, 1, 1));
        player.build();
        L04_SpaceInvaders.root.addChild(player);
        return player;
    }
    function buildShieldsOnMap() {
        let shieldsCollection = new fc.Node("All Shields");
        let shieldPositions = [new fc.Vector3(-6, 2, 0), new fc.Vector3(-2, 2, 0), new fc.Vector3(2, 2, 0), new fc.Vector3(6, 2, 0)];
        for (let iShields = 0; iShields < 4; iShields++) {
            let shield = new L04_SpaceInvaders.Shield("Shield", shieldPositions[iShields]);
            shield.buildShield();
            shieldsCollection.addChild(shield);
        }
        L04_SpaceInvaders.root.addChild(shieldsCollection);
    }
    function update(_event) {
        //root.mtxLocal.rotateY(1);
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.A, fc.KEYBOARD_CODE.ARROW_LEFT])) {
            player.moveLeft();
        }
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.D, fc.KEYBOARD_CODE.ARROW_RIGHT])) {
            player.moveRight();
        }
        //shot flying
        if (!L04_SpaceInvaders.ableToShoot && activeProjectile != null) {
            //player.shoot();
            activeProjectile.fly();
            if (activeProjectile.mtxLocal.translation.y >= 17.5) {
                activeProjectile.activate(false);
                activeProjectile.mtxLocal.translateY(-17.5);
                activeProjectile.getCoordinates().y -= 17.5;
                L04_SpaceInvaders.ableToShoot = true;
            }
        }
        //shot aktivating
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.SPACE]) && L04_SpaceInvaders.ableToShoot == true) {
            L04_SpaceInvaders.ableToShoot = false;
            activeProjectile.mtxLocal.translateX(player.mtxLocal.translation.x - activeProjectile.mtxLocal.translation.x);
            activeProjectile.activate(true);
        }
        viewport.draw();
    }
})(L04_SpaceInvaders || (L04_SpaceInvaders = {}));
//# sourceMappingURL=main.js.map