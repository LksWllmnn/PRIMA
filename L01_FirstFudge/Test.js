"use strict";
var L01_FirstFudge;
(function (L01_FirstFudge) {
    var fc = FudgeCore;
    let viewport = new fc.Viewport();
    let node = new fc.Node("Test");
    window.addEventListener("load", hndlLoad);
    function hndlLoad(_event) {
        const canvas = document.querySelector("canvas");
        //Transform Component anhängen, dass man später direkt drauf zugreifen kann un nicht noch extra erzeugen (Zeile 38)
        node.addComponent(new fc.ComponentTransform());
        //let mesh: fc.MeshQuad = new fc.MeshQuad("Quad");
        let mesh = new fc.MeshCube("Quad");
        node.addComponent(new fc.ComponentMesh(mesh));
        let material = new fc.Material("Florian", fc.ShaderUniColor, new fc.CoatColored(new fc.Color(1, 1, 1, 1)));
        let cmpMat = new fc.ComponentMaterial(material);
        node.addComponent(cmpMat);
        //Camera
        let cmpCamera = new fc.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(3);
        cmpCamera.mtxPivot.rotateY(180);
        //console.log(cmpCamera);
        //Camera an Viewport anheften
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        //Loop
        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 60);
        fc.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, updater);
    }
    function updater(_event) {
        //console.log(_event);
        //node.getComponent(fc.ComponentMesh).mtxPivot.translateX(0.1);
        //node.mtxLocal.rotateY(0.1);
        let rotSpeed = 90 / 1000;
        node.getComponent(fc.ComponentMesh).mtxPivot.rotateZ(rotSpeed * fc.Loop.timeFrameReal);
        node.getComponent(fc.ComponentMesh).mtxPivot.rotateY(rotSpeed * fc.Loop.timeFrameReal);
        node.getComponent(fc.ComponentMesh).mtxPivot.rotateX(rotSpeed * fc.Loop.timeFrameReal);
        viewport.draw();
    }
})(L01_FirstFudge || (L01_FirstFudge = {}));
//# sourceMappingURL=Test.js.map