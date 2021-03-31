namespace L03_SpaceInvaders {
    import fc = FudgeCore;
    
    let viewport: fc.Viewport = new fc.Viewport();

    export let root: fc.Node = new fc.Node("Root");
    root.addComponent(new fc.ComponentTransform());
    
    window.addEventListener("load", hndlLoad);

    function hndlLoad(_event: Event): void {
        let cube: fc.MeshCube = new fc.MeshCube("Cube");
        let sphere: fc.MeshSphere = new fc.MeshSphere("Sphere", 6, 6);

        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Walls
        let wallsCollection: fc.Node = new fc.Node("All Walls");
        let wallMat: fc.Material = new fc.Material("Blue", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));
        
        let topWall: Wall = new Wall("Top Wall", new fc.Vector3(0, 18.5, 0),  wallMat, cube, new fc.Vector2(20, 1));
        topWall.build();
        wallsCollection.addChild(topWall);

        let bottomWall: Wall = new Wall("Bottom Wall", new fc.Vector3(0, -1.5, 0), wallMat, cube, new fc.Vector2(20, 1));
        bottomWall.build();
        wallsCollection.addChild(bottomWall);

        let leftWall: Wall = new Wall("Left Wall", new fc.Vector3(-10, 8.5, 0), wallMat, cube, new fc.Vector2(1, 20));
        leftWall.build();
        wallsCollection.addChild(leftWall);

        let rightWall: Wall = new Wall("Right Wall", new fc.Vector3(10, 8.5, 0), wallMat, cube, new fc.Vector2(1, 20));
        rightWall.build();
        wallsCollection.addChild(rightWall);

        root.addChild(wallsCollection);

        //Player
        let playerMat: fc.Material = new fc.Material("Material for real Players", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("GREEN")));
        let player: Player = new Player("Player", new fc.Vector3(1, 0, 0), playerMat, cube, new fc.Vector2(1, 1));
        player.build();
        root.addChild(player);

        //Shields
        let shieldsCollection: fc.Node = new fc.Node("All Shields");
        let shieldPositions: fc.Vector3[] = [new fc.Vector3(-6, 2, 0), new fc.Vector3(-2, 2, 0), new fc.Vector3(2, 2, 0), new fc.Vector3(6, 2, 0)];
        let shieldMat: fc.Material = new fc.Material("AnOtter Brick in the Wall", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("Orange")));

        for (let iShields: number = 0; iShields < 4; iShields++) {
            let shield: Shield = new Shield("Shield", shieldPositions[iShields], shieldMat, cube);
            shield.buildShield();
            shieldsCollection.addChild(shield);
        }
        root.addChild(shieldsCollection);


        //Enemys
        let enemysCollection: fc.Node = new fc.Node("All Enemys");
        let matEnemy: fc.Material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));

        let mothership: Mothership = new Mothership("Mothership", new fc.Vector3(6, 16.5, 0), matEnemy, cube, new fc.Vector2(2 , 1));
        mothership.build();
        enemysCollection.addChild(mothership);

        let invadersSmall: fc.Node = new fc.Node("Small Invaders");

        for (let i: number = 0; i < 21; i++) {
            let newEnemy: Enemy = new Enemy("Enemy", startPosEnemys[i].coordinates, matEnemy, sphere, new fc.Vector2(1, 1));
            newEnemy.build();
            invadersSmall.addChild(newEnemy);
        }
        enemysCollection.addChild(invadersSmall);

        root.addChild(enemysCollection);
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

        console.log(root);
    }
    
    function update(_event: Event): void {
        //root.mtxLocal.rotateY(1.5);

        viewport.draw();
    }
}
