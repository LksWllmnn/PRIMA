namespace grabbingJson {

    import fc = FudgeCore;
    //import fa = FudgeAid;


    window.addEventListener("load", startInteractiveViewport);

    let graph: fc.Graph;
    let viewport: fc.Viewport = new FudgeCore.Viewport();
    let cmpCamera: fc.ComponentCamera = new FudgeCore.ComponentCamera();

    let ballChanged: boolean = false;
    let spaceIsPressed: boolean = false;

    let changedBallColor: fc.Coat = new fc.CoatColored(new fc.Color(0, 255, 0, 1));
    let oldBallColor: fc.Coat;

    let cmpAvatar: fc.ComponentRigidbody;

    let avatar: fc.Node = new fc.Node("Avatar");
    

    async function startInteractiveViewport(): Promise <void> {
        await fc.Project.loadResourcesFromHTML();
        let jsonGraph: fc.SerializableResource = fc.Project.resources["Graph|2021-04-29T09:42:33.689Z|79967"];
        graph = <fc.Graph>jsonGraph;
        hndlLoaded();
    }

    function hndlLoaded(): void {
        fc.Physics.settings.debugDraw = true;

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        
        cmpCamera.mtxPivot.translateY(1);
        cmpCamera.mtxPivot.rotateX(15);
        cmpCamera.mtxPivot.rotateY(0);
        cmpCamera.mtxPivot.translateZ(-6);

        settingUpAvatar();

        createRigidbodys();

        setSphereRigidBody(graph.getChild(1));

        viewport.initialize("InteractiveViewport", graph, cmpCamera, canvas);

        console.log(graph);
        
        fc.Physics.start(graph);

        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 30);
        fc.Loop.addEventListener(fc.EVENT.LOOP_FRAME, renderAFrame);
    }

    function renderAFrame(): void {
        //console.log("Hello World");

        fc.Physics.world.simulate(fc.Loop.timeFrameReal / 1000);

        let _offset: number = 100 * fc.Loop.timeFrameReal / 1000;

        let forward: fc.Vector3;
        forward = avatar.mtxWorld.getZ();
        
        //let sideward: ƒ.Vector3;
        //sideward = graph.getChild(1).mtxWorld.getX();

        

        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.SPACE] ) && !ballChanged && !spaceIsPressed) {
            //console.log(_graph.getChild(1).getComponent(fc.ComponentMaterial).material.getCoat()); //= fc.Color.CSS("#000ff000");
            oldBallColor = graph.getChild(1).getComponent(fc.ComponentMaterial).material.getCoat();
            graph.getChild(1).getComponent(fc.ComponentMaterial).material.setCoat(changedBallColor);
            ballChanged = true;
            spaceIsPressed = true;
            console.log(forward = graph.getChild(1).mtxWorld.getZ());
        }

        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.SPACE] ) && ballChanged && !spaceIsPressed) {
            //_graph.getChild(1).getComponent(fc.ComponentMaterial).clrPrimary = fc.Color.CSS("#FFFFFF");
            graph.getChild(1).getComponent(fc.ComponentMaterial).material.setCoat(oldBallColor);
            ballChanged = false;
            spaceIsPressed = true;
            console.log("hi2");
        }

        if (!fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.SPACE])) {
            spaceIsPressed = false;
        }

        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.A])) {
            //graph.getChild(1).getComponent(fc.ComponentRigidbody).setVelocity(fc.Vector3.SCALE(sideward, _offset));
            //cmpAvatar.setVelocity(fc.Vector3.SCALE(sideward, _offset));
            cmpAvatar.rotateBody(fc.Vector3.Y(2));
        }

        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.D])) {       
            //graph.getChild(1).getComponent(fc.ComponentRigidbody).setVelocity(fc.Vector3.SCALE(sideward, -_offset));
            //cmpAvatar.setVelocity(fc.Vector3.SCALE(sideward, -_offset));
            cmpAvatar.rotateBody(fc.Vector3.Y(-2));
        }

        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.W])) {
            //graph.getChild(1).getComponent(fc.ComponentRigidbody).setVelocity(fc.Vector3.SCALE(forward, _offset));
            cmpAvatar.setVelocity(fc.Vector3.SCALE(forward, _offset));
        }

        if (fc.Keyboard.isPressedOne([fc.KEYBOARD_CODE.S])) {
            //graph.getChild(1).getComponent(fc.ComponentRigidbody).setVelocity(fc.Vector3.SCALE(forward, -_offset));
            cmpAvatar.setVelocity(fc.Vector3.SCALE(forward, -_offset));
        }
            
        viewport.draw();

        fc.Physics.settings.debugDraw = true;
    }

    function settingUpAvatar(): void {
        cmpAvatar = new ƒ.ComponentRigidbody(1, ƒ.PHYSICS_TYPE.DYNAMIC, ƒ.COLLIDER_TYPE.CAPSULE, ƒ.PHYSICS_GROUP.GROUP_2);
        cmpAvatar.restitution = 0.5;
        cmpAvatar.rotationInfluenceFactor = ƒ.Vector3.ZERO();
        cmpAvatar.friction = 1;

        
        avatar.addComponent(new fc.ComponentTransform(fc.Matrix4x4.TRANSLATION(fc.Vector3.Y(3))));
        avatar.addComponent(cmpAvatar);
        avatar.addComponent(cmpCamera);
        graph.appendChild(avatar);
    }

    function createRigidbodys(): void {
        let lvl: fc.Node = graph.getChildrenByName("lvl")[0];
        for (let lvlElement of lvl.getChildren()) {
            let cmpRigidbody: fc.ComponentRigidbody = new fc.ComponentRigidbody(0, fc.PHYSICS_TYPE.STATIC, fc.COLLIDER_TYPE.CUBE);
            lvlElement.addComponent(cmpRigidbody);
        }
    }

    function setSphereRigidBody(_ball: fc.Node): void {
        let cmpRigidbody: fc.ComponentRigidbody = new fc.ComponentRigidbody(0.1, fc.PHYSICS_TYPE.DYNAMIC, fc.COLLIDER_TYPE.SPHERE, ƒ.PHYSICS_GROUP.DEFAULT);
        cmpRigidbody.restitution = 2.5;
        _ball.addComponent(cmpRigidbody);
    }
}