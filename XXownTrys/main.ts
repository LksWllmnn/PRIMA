namespace ownTryM1 {
    import fu = FudgeCore;

    window.addEventListener("load", hndlLoad);
    window.addEventListener("load", hndlLoad2);

    //Camera
    export let viewport: fu.Viewport;
    export let viewport2: fu.Viewport;

    let node2: fu.Node;
    
    
    function hndlLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canv1");

        //fu.Debug.log(canvas);

        let node: fu.Node = new fu.Node("Quad");

        //Mesh des Quadrats erstellen und der Node zuweisen
        let mesh: fu.MeshQuad = new fu.MeshQuad();
        let cmpMesh: fu.Component = new fu.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        //Material des Quadrats erstellen und der Node zuweisen
        let mtrSolidWhite: fu.Material = new fu.Material("SolidWhite", fu.ShaderUniColor, new fu.CoatColored(fu.Color.CSS("GREEN")));
        let cmpMaterial: fu.ComponentMaterial = new fu.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);

        //Neue Camera erstellen und Position und Richtung zuweisen
        let cmpCamera: fu.ComponentCamera = new fu.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(2);
        cmpCamera.mtxPivot.rotateY(180);

        //Camera dem Viewport zuweisen
        viewport = new fu.Viewport();
        if (canvas)
            viewport.initialize("Viewport", node, cmpCamera, canvas);
        //fu.Debug.log(viewport);

        viewport.draw();
    }

    

    function hndlLoad2(_event: Event): void {
        const canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canv2");
        //fu.Debug.log(canvas);

        node2 = new fu.Node("Cube");

        //Mesh des Quadrats erstellen und der Node zuweisen
        let mesh: fu.MeshCube = new fu.MeshCube("Cube");
        let cmpMesh: fu.ComponentMesh = new fu.ComponentMesh(mesh);
        cmpMesh.mtxPivot.rotateY(45);
        node2.addComponent(cmpMesh);

        //Material des Quadrats erstellen und der Node zuweisen
        let mtrSolidWhite: fu.Material = new fu.Material("SolidRed", fu.ShaderUniColor, new fu.CoatColored(fu.Color.CSS("RED")));
        let cmpMaterial: fu.ComponentMaterial = new fu.ComponentMaterial(mtrSolidWhite);
        node2.addComponent(cmpMaterial);

        //Neue Camera erstellen und Position und Richtung zuweisen
        let cmpCamera: fu.ComponentCamera = new fu.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(3);
        cmpCamera.mtxPivot.rotateY(180);

        //Camera dem Viewport zuweisen
        viewport2 = new fu.Viewport();
        if (canvas2)
            viewport2.initialize("Viewport", node2, cmpCamera, canvas2);
        //fu.Debug.log(viewport);

        node2.addComponent(new fu.ComponentTransform());

        fu.Loop.addEventListener(fu.EVENT.LOOP_FRAME, hndlLoop2);
        fu.Loop.start(fu.LOOP_MODE.TIME_GAME, 30);


        
    }

    function hndlLoop2(_event: Event): void {
        console.log("Tick");
        node2.mtxLocal.rotateY(2);
        viewport2.draw();  
    }
}