"use strict";
var L02_SpaceInvaders;
(function (L02_SpaceInvaders) {
    var fc = FudgeCore;
    let viewport = new fc.Viewport();
    L02_SpaceInvaders.root = new fc.Node("Root");
    L02_SpaceInvaders.root.addComponent(new fc.ComponentTransform());
    window.addEventListener("load", hndlLoad);
    function hndlLoad(_event) {
        const canvas = document.querySelector("canvas");
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        let topWall = new L02_SpaceInvaders.Wall("Top", 0, 18.5, 20, 1);
        topWall.buildWall();
        let bottomWall = new L02_SpaceInvaders.Wall("Bottom", 0, -1.5, 20, 1);
        bottomWall.buildWall();
        let leftWall = new L02_SpaceInvaders.Wall("Left", -10, 8.5, 1, 20);
        leftWall.buildWall();
        let rightWall = new L02_SpaceInvaders.Wall("Right", 10, 8.5, 1, 20);
        rightWall.buildWall();
        let player = new L02_SpaceInvaders.Player();
        player.build();
        let shield1 = new L02_SpaceInvaders.Shield(-6, 1);
        shield1.buildShield();
        let shield2 = new L02_SpaceInvaders.Shield(-2, 2);
        shield2.buildShield();
        let shield3 = new L02_SpaceInvaders.Shield(2, 3);
        shield3.buildShield();
        let shield4 = new L02_SpaceInvaders.Shield(6, 4);
        shield4.buildShield();
        let motherShip = new L02_SpaceInvaders.EnemyMotherShip();
        motherShip.buildEnemyMotherShip();
        motherShip.startBuildingEnemys();
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Camera
        let cmpCamera = new fc.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.rotateY(180);
        cmpCamera.mtxPivot.rotateX(-15);
        //Camera an Viewport anheften
        viewport.initialize("Viewport", L02_SpaceInvaders.root, cmpCamera, canvas);
        //Loop
        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 60);
        fc.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
    }
    function update(_event) {
        //root.mtxLocal.rotateY(1.5);
        viewport.draw();
    }
})(L02_SpaceInvaders || (L02_SpaceInvaders = {}));
//# sourceMappingURL=main.js.map