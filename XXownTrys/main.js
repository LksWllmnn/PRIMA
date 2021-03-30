"use strict";
var ownTryM1;
(function (ownTryM1) {
    var fu = FudgeCore;
    window.addEventListener("load", hndlLoad);
    window.addEventListener("load", hndlLoad2);
    let node2;
    function hndlLoad(_event) {
        const canvas = document.getElementById("canv1");
        //fu.Debug.log(canvas);
        let node = new fu.Node("Quad");
        //Mesh des Quadrats erstellen und der Node zuweisen
        let mesh = new fu.MeshQuad();
        let cmpMesh = new fu.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        //Material des Quadrats erstellen und der Node zuweisen
        let mtrSolidWhite = new fu.Material("SolidWhite", fu.ShaderUniColor, new fu.CoatColored(fu.Color.CSS("GREEN")));
        let cmpMaterial = new fu.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);
        //Neue Camera erstellen und Position und Richtung zuweisen
        let cmpCamera = new fu.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(2);
        cmpCamera.mtxPivot.rotateY(180);
        //Camera dem Viewport zuweisen
        ownTryM1.viewport = new fu.Viewport();
        if (canvas)
            ownTryM1.viewport.initialize("Viewport", node, cmpCamera, canvas);
        //fu.Debug.log(viewport);
        ownTryM1.viewport.draw();
    }
    function hndlLoad2(_event) {
        const canvas2 = document.getElementById("canv2");
        //fu.Debug.log(canvas);
        node2 = new fu.Node("Cube");
        //Mesh des Quadrats erstellen und der Node zuweisen
        let mesh = new fu.MeshCube("Cube");
        let cmpMesh = new fu.ComponentMesh(mesh);
        cmpMesh.mtxPivot.rotateY(45);
        node2.addComponent(cmpMesh);
        //Material des Quadrats erstellen und der Node zuweisen
        let mtrSolidWhite = new fu.Material("SolidRed", fu.ShaderUniColor, new fu.CoatColored(fu.Color.CSS("RED")));
        let cmpMaterial = new fu.ComponentMaterial(mtrSolidWhite);
        node2.addComponent(cmpMaterial);
        //Neue Camera erstellen und Position und Richtung zuweisen
        let cmpCamera = new fu.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(3);
        cmpCamera.mtxPivot.rotateY(180);
        //Camera dem Viewport zuweisen
        ownTryM1.viewport2 = new fu.Viewport();
        if (canvas2)
            ownTryM1.viewport2.initialize("Viewport", node2, cmpCamera, canvas2);
        //fu.Debug.log(viewport);
        node2.addComponent(new fu.ComponentTransform());
        fu.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, hndlLoop2);
        fu.Loop.start(fu.LOOP_MODE.TIME_GAME, 30);
    }
    function hndlLoop2(_event) {
        console.log("Tick");
        node2.mtxLocal.rotateY(2);
        ownTryM1.viewport2.draw();
    }
})(ownTryM1 || (ownTryM1 = {}));
//# sourceMappingURL=main.js.map