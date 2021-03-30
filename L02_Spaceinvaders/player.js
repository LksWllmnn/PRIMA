"use strict";
var L02_SpaceInvaders;
(function (L02_SpaceInvaders) {
    var fc = FudgeCore;
    class Player {
        constructor() {
            this.yPos = 0;
            this.xPos = 0;
        }
        build() {
            let player = new fc.Node("Cube One");
            let cubePlayer = new fc.Node("Cube One");
            let meshPlayer = new fc.MeshCube();
            let cmpTransPlayer = new fc.ComponentTransform();
            let cmpPlayer = new fc.ComponentMesh(meshPlayer);
            let matCube = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("GREEN")));
            let cmpMatCube = new fc.ComponentMaterial(matCube);
            cubePlayer.addComponent(cmpPlayer);
            cubePlayer.addComponent(cmpTransPlayer);
            cubePlayer.addComponent(cmpMatCube);
            cmpPlayer.mtxPivot.scaleY(0.5);
            let tubePlayer = new fc.Node("Cube One");
            let meshTubePlayer = new fc.MeshCube();
            let cmpTransTubePlayer = new fc.ComponentTransform();
            let cmpMeshTubePlayer = new fc.ComponentMesh(meshTubePlayer);
            let matTube = new fc.Material("Green", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("GREEN")));
            let cmpMatTube = new fc.ComponentMaterial(matTube);
            tubePlayer.addComponent(cmpMeshTubePlayer);
            tubePlayer.addComponent(cmpTransTubePlayer);
            tubePlayer.addComponent(cmpMatTube);
            cmpMeshTubePlayer.mtxPivot.translateY(0.2);
            cmpMeshTubePlayer.mtxPivot.scaleY(0.6);
            cmpMeshTubePlayer.mtxPivot.scaleX(0.2);
            cmpMeshTubePlayer.mtxPivot.scaleZ(0.2);
            player.appendChild(tubePlayer);
            player.appendChild(cubePlayer);
            L02_SpaceInvaders.root.appendChild(player);
        }
    }
    L02_SpaceInvaders.Player = Player;
})(L02_SpaceInvaders || (L02_SpaceInvaders = {}));
//# sourceMappingURL=player.js.map