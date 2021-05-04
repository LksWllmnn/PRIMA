"use strict";
var catchingCubes;
(function (catchingCubes) {
    //let _graphId: string = "Graph|2021-04-22T16:55:40.498Z|61670";
    window.addEventListener("load", hndlLoad);
    //window.addEventListener("load", init);
    // show dialog for startup
    //let dialog: HTMLDialogElement;
    function hndlLoad() {
        console.log("hello World");
    }
    function getLoadedComponents(_graph, _viewport) {
        console.log("Hello World");
    }
    catchingCubes.getLoadedComponents = getLoadedComponents;
    /*async function getJson(): Promise<void> {
        let jsonUrl: RequestInfo = "NewProject.json";
        let response: Response = await fetch(jsonUrl);

        console.log(response.text);
    }

    async function startInteractiveViewport(): Promise<void> {
        // load resources referenced in the link-tag
        await fc.Project.loadResourcesFromHTML();
        fc.Debug.log("Project:", fc.Project.resources);
        // pick the graph to show
        let graph: any = fc.Project.resources[_graphId];
        fc.Debug.log("Graph:", graph);
        // setup the viewport
        let cmpCamera: fc.ComponentCamera = new fc.ComponentCamera();
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let viewport: fc.Viewport = new fc.Viewport();
        viewport.initialize("InteractiveViewport", graph, cmpCamera, canvas);
        fc.Debug.log("Viewport:", viewport);
        // hide the cursor when interacting, also suppressing right-click menu
        canvas.addEventListener("mousedown", canvas.requestPointerLock);
        canvas.addEventListener("mouseup", function (): void { document.exitPointerLock(); });
        // make the camera interactive (complex method in FudgeAid)
        FudgeAid.Viewport.expandCameraToInteractiveOrbit(viewport);
        // setup audio
        let cmpListener: fc.ComponentAudioListener = new fc.ComponentAudioListener();
        cmpCamera.getContainer().addComponent(cmpListener);
        fc.AudioManager.default.listenWith(cmpListener);
        fc.AudioManager.default.listenTo(graph);
        fc.Debug.log("Audio:", fc.AudioManager.default);
        // draw viewport once for immediate feedback
        viewport.draw();
        canvas.dispatchEvent(new CustomEvent("interactiveViewportStarted", { bubbles: true, detail: viewport }));
    }

    function init(_event: Event): void {
        dialog = document.querySelector("dialog");
        dialog.addEventListener("click", function (_event: Event): void {
        dialog.close();
        startInteractiveViewport();
        dialog.showModal();
    }*/
})(catchingCubes || (catchingCubes = {}));
//# sourceMappingURL=main.js.map