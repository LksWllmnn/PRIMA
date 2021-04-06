namespace L04_SpaceInvaders {
    import fc = FudgeCore;

    
    
    let viewport: fc.Viewport = new fc.Viewport();

    //Wurzel erstellen
    export let root: fc.Node = new fc.Node("Root");
    root.addComponent(new fc.ComponentTransform());

    //Skripte nach laden des HTML aktivieren
    window.addEventListener("load", hndlLoad);

    let bulletsCounter: HTMLParagraphElement;

    //Schiff erstellen
    let player: Player = buildPlayerOnMap();
    export let ableToShoot: boolean = true;

    let magazineLength: number;
    let nextBullet: Projectile;

    //let activeProjectile: Projectile = new Projectile("Projectile", player.getCoordinates(), new fc.Vector3(0.2, 0.2, 0.2));
    //activeProjectile.build();
    //activeProjectile.activate(false);

    //root.addChild(activeProjectile);

    function hndlLoad(_event: Event): void {
        bulletsCounter = <HTMLParagraphElement> document.getElementById("Bullets");

        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Walls
        buildWallsOnMap();

        //Shields
        buildShieldsOnMap(); 

        //Enemys
        buildEnemysOnMap();
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //Camera
        let cmpCamera: fc.ComponentCamera = new fc.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.rotateY(180);
        cmpCamera.mtxPivot.rotateX(-15);

        //Camera an Viewport anheften
        viewport.initialize("Viewport", root, cmpCamera, canvas);

        //Loop
        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 30);
        fc.Loop.addEventListener(fc.EVENT.LOOP_FRAME, update);

        console.log(player.getChild(2));
    }

    function buildWallsOnMap(): void {
        let wallsCollection: fc.Node = new fc.Node("All Walls");
        
        let topWall: Wall = new Wall("Top Wall", new fc.Vector3(0, 18.5, 0), new fc.Vector3(20, 1, 1));
        topWall.build();
        wallsCollection.addChild(topWall);

        let bottomWall: Wall = new Wall("Bottom Wall", new fc.Vector3(0, -1.5, 0), new fc.Vector3(20, 1, 1));
        bottomWall.build();
        wallsCollection.addChild(bottomWall);

        let leftWall: Wall = new Wall("Left Wall", new fc.Vector3(-10, 8.5, 0), new fc.Vector3(1, 20, 1));
        leftWall.build();
        wallsCollection.addChild(leftWall);

        let rightWall: Wall = new Wall("Right Wall", new fc.Vector3(10, 8.5, 0), new fc.Vector3(1, 20, 1));
        rightWall.build();
        wallsCollection.addChild(rightWall);

        root.addChild(wallsCollection);
    }

    function buildEnemysOnMap(): void {
        let enemysCollection: fc.Node = new fc.Node("All Enemys");

        let mothership: Mothership = new Mothership("Mothership", new fc.Vector3(6, 16.5, 0), new fc.Vector3(2 , 1, 1));
        mothership.build();
        enemysCollection.addChild(mothership);

        let invadersSmall: fc.Node = new fc.Node("Small Invaders");

        for (let i: number = 0; i < 21; i++) {
            let newEnemy: Enemy = new Enemy("Enemy", startPosEnemys[i].coordinates, new fc.Vector3(1, 1, 1));
            newEnemy.build();
            invadersSmall.addChild(newEnemy);
        }
        enemysCollection.addChild(invadersSmall);

        root.addChild(enemysCollection);
    }

    function buildPlayerOnMap(): Player {
        let player: Player = new Player("Player", new fc.Vector3(0, 0, 0), new fc.Vector3(1, 1, 1));
        player.build();
        root.addChild(player);
        return player;
    }

    function buildShieldsOnMap(): void {
        let shieldsCollection: fc.Node = new fc.Node("All Shields");
        let shieldPositions: fc.Vector3[] = [new fc.Vector3(-6, 2, 0), new fc.Vector3(-2, 2, 0), new fc.Vector3(2, 2, 0), new fc.Vector3(6, 2, 0)];

        for (let iShields: number = 0; iShields < 4; iShields++) {
            let shield: Shield = new Shield("Shield", shieldPositions[iShields]);
            shield.buildShield();
            shieldsCollection.addChild(shield);
        }
        root.addChild(shieldsCollection);
    }
    
    function update(_event: Event): void {
        //root.mtxLocal.rotateY(1);

        let flyingShots: Projectile[] = <Projectile[]>root.getChildrenByName("Projectile");

        magazineLength = player.getChild(2).getChildren().length;
        nextBullet = <Projectile>player.getChild(2).getChild(player.getChild(2).getChildren().length - 1);
        
        //Bullet counter
        if (bulletsCounter) {
            if (ableToShoot)
                bulletsCounter.innerHTML = "Bullets: " + magazineLength + " READY TO SHOOT";
            else {
                bulletsCounter.innerHTML = "Bullets: " + magazineLength + " RELOAD";
            }
        }

        for (let i: number = 0; i < flyingShots.length; i++) {
            if (flyingShots[i].mtxLocal.translation.y <= 17.5)
                flyingShots[i].fly();
            if (flyingShots[i].mtxLocal.translation.y >= 17.5) {
                ableToShoot = true;
                flyingShots[i].activate(false);
                root.removeChild(flyingShots[i]);
            }
            if (flyingShots[flyingShots.length - 1].mtxLocal.translation.y >= 7.5) {
                ableToShoot = true;
            }
        }



        //move Ship
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.A, fc.KEYBOARD_CODE.ARROW_LEFT])) {
            player.moveLeft();
        }
        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.D, fc.KEYBOARD_CODE.ARROW_RIGHT])) {
            player.moveRight();
        }

        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.SPACE]) && ableToShoot == true) {
            ableToShoot = false;
            player.shoot(nextBullet);
            nextBullet.mtxLocal.translateX(player.mtxLocal.translation.x - nextBullet.mtxLocal.translation.x);
        }
        viewport.draw();
    }
}
