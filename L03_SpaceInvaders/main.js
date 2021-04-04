"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    var fc = FudgeCore;
    let viewport = new fc.Viewport();
    //Wurzel erstellen
    L03_SpaceInvaders.root = new fc.Node("Root");
    L03_SpaceInvaders.root.addComponent(new fc.ComponentTransform());
    //Skripte nach laden des HTML aktivieren
    window.addEventListener("load", hndlLoad);
    //grundlegende Mesh einmal initiiren
    let cube = new fc.MeshCube("Cube");
    //Schiff erstellen
    let playerMat = new fc.Material("Material for real Players", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("GREEN")));
    let player = new L03_SpaceInvaders.Player("Player", new fc.Vector3(0, 0, 0), playerMat, cube, new fc.Vector2(1, 1));
    L03_SpaceInvaders.ableToShoot = true;
    let activeProjectile = new L03_SpaceInvaders.Projectile("Projectile", player.getCoordinates(), playerMat, cube, new fc.Vector2(0.1, 0.1));
    activeProjectile.build();
    L03_SpaceInvaders.root.addChild(activeProjectile);
    function hndlLoad(_event) {
        const canvas = document.querySelector("canvas");
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Walls
        buildWallsOnMap();
        //Player
        buildPlayer();
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
        viewport.initialize("Viewport", L03_SpaceInvaders.root, cmpCamera, canvas);
        //Loop
        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 30);
        fc.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        console.log(L03_SpaceInvaders.root);
        console.log(activeProjectile.mtxLocal);
    }
    function buildWallsOnMap() {
        let wallsCollection = new fc.Node("All Walls");
        let wallMat = new fc.Material("Blue", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));
        let topWall = new L03_SpaceInvaders.Wall("Top Wall", new fc.Vector3(0, 18.5, 0), wallMat, cube, new fc.Vector2(20, 1));
        topWall.build();
        wallsCollection.addChild(topWall);
        let bottomWall = new L03_SpaceInvaders.Wall("Bottom Wall", new fc.Vector3(0, -1.5, 0), wallMat, cube, new fc.Vector2(20, 1));
        bottomWall.build();
        wallsCollection.addChild(bottomWall);
        let leftWall = new L03_SpaceInvaders.Wall("Left Wall", new fc.Vector3(-10, 8.5, 0), wallMat, cube, new fc.Vector2(1, 20));
        leftWall.build();
        wallsCollection.addChild(leftWall);
        let rightWall = new L03_SpaceInvaders.Wall("Right Wall", new fc.Vector3(10, 8.5, 0), wallMat, cube, new fc.Vector2(1, 20));
        rightWall.build();
        wallsCollection.addChild(rightWall);
        L03_SpaceInvaders.root.addChild(wallsCollection);
    }
    function buildEnemysOnMap() {
        let sphere = new fc.MeshSphere("Sphere", 6, 6);
        let enemysCollection = new fc.Node("All Enemys");
        let matEnemy = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
        let mothership = new L03_SpaceInvaders.Mothership("Mothership", new fc.Vector3(6, 16.5, 0), matEnemy, cube, new fc.Vector2(2, 1));
        mothership.build();
        enemysCollection.addChild(mothership);
        let invadersSmall = new fc.Node("Small Invaders");
        for (let i = 0; i < 21; i++) {
            let newEnemy = new L03_SpaceInvaders.Enemy("Enemy", L03_SpaceInvaders.startPosEnemys[i].coordinates, matEnemy, sphere, new fc.Vector2(1, 1));
            newEnemy.build();
            invadersSmall.addChild(newEnemy);
        }
        enemysCollection.addChild(invadersSmall);
        L03_SpaceInvaders.root.addChild(enemysCollection);
    }
    function buildPlayer() {
        player.build();
        L03_SpaceInvaders.root.addChild(player);
    }
    function buildShieldsOnMap() {
        let shieldsCollection = new fc.Node("All Shields");
        let shieldPositions = [new fc.Vector3(-6, 2, 0), new fc.Vector3(-2, 2, 0), new fc.Vector3(2, 2, 0), new fc.Vector3(6, 2, 0)];
        let shieldMat = new fc.Material("AnOtter Brick in the Wall", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("Orange")));
        for (let iShields = 0; iShields < 4; iShields++) {
            let shield = new L03_SpaceInvaders.Shield("Shield", shieldPositions[iShields], shieldMat, cube);
            shield.buildShield();
            shieldsCollection.addChild(shield);
        }
        L03_SpaceInvaders.root.addChild(shieldsCollection);
    }
    function update(_event) {
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.A, fc.KEYBOARD_CODE.ARROW_LEFT])) {
            player.moveLeft();
        }
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.D, fc.KEYBOARD_CODE.ARROW_RIGHT])) {
            player.moveRight();
        }
        //shot flying
        if (!L03_SpaceInvaders.ableToShoot && activeProjectile != null) {
            //player.shoot();
            activeProjectile.fly();
            if (activeProjectile.mtxLocal.translation.y >= 17) {
                activeProjectile.activate(false);
                activeProjectile.mtxLocal.translateY(-17);
                activeProjectile.getCoordinates().y -= 17;
                L03_SpaceInvaders.ableToShoot = true;
            }
        }
        //shot aktivating
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.SPACE]) && L03_SpaceInvaders.ableToShoot == true) {
            L03_SpaceInvaders.ableToShoot = false;
            activeProjectile.mtxLocal.translateX(player.mtxLocal.translation.x - activeProjectile.mtxLocal.translation.x);
            activeProjectile.activate(true);
        }
        viewport.draw();
    }
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=main.js.map