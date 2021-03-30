namespace L02_SpaceInvaders {
    import fc = FudgeCore;
    
    let viewport: fc.Viewport = new fc.Viewport();

    export let root: fc.Node = new fc.Node("Root");
    root.addComponent(new fc.ComponentTransform());
    
    window.addEventListener("load", hndlLoad);

    function hndlLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        let topWall: Wall = new Wall("Top", 0, 18.5, 20, 1);
        topWall.buildWall();
        let bottomWall: Wall = new Wall("Bottom", 0, -1.5, 20, 1);
        bottomWall.buildWall();
        let leftWall: Wall = new Wall("Left", -10, 8.5, 1, 20);
        leftWall.buildWall();
        let rightWall: Wall = new Wall("Right", 10, 8.5, 1, 20);
        rightWall.buildWall();

        let player: Player = new Player();
        player.build();

        let shield1: Shield = new Shield(-6, 1);
        shield1.buildShield();
                    
        let shield2: Shield = new Shield(-2, 2);
        shield2.buildShield();
                    
        let shield3: Shield = new Shield(2, 3);
        shield3.buildShield();
                    
        let shield4: Shield = new Shield(6, 4);
        shield4.buildShield();

        let motherShip: EnemyMotherShip = new EnemyMotherShip();
        motherShip.buildEnemyMotherShip();
        motherShip.startBuildingEnemys();
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //Camera
        let cmpCamera: fc.ComponentCamera = new fc.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.rotateY(180);
        cmpCamera.mtxPivot.rotateX(-15);

        //Camera an Viewport anheften
        viewport.initialize("Viewport", root, cmpCamera, canvas);

        //Loop
        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 60);
        fc.Loop.addEventListener(fc.EVENT.LOOP_FRAME, update);
    }
    
    function update(_event: Event): void {
        //root.mtxLocal.rotateY(1.5);

        viewport.draw();
    }
}
