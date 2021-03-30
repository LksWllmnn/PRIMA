namespace L02_SpaceInvaders {
    import fc = FudgeCore;

    export class Player {
        xPos: number;
        yPos: number = 0;

        constructor() {
            this.xPos = 0;
        }

        build(): void {
            let player: fc.Node = new fc.Node("Cube One");

            let cubePlayer: fc.Node = new fc.Node("Cube One");
            let meshPlayer: fc.MeshCube = new fc.MeshCube();
            let cmpTransPlayer: fc.ComponentTransform = new fc.ComponentTransform();
            let cmpPlayer: fc.ComponentMesh = new fc.ComponentMesh(meshPlayer);
            let matCube: fc.Material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("GREEN")));
            let cmpMatCube: fc.ComponentMaterial = new fc.ComponentMaterial(matCube);
    
            cubePlayer.addComponent(cmpPlayer);
            cubePlayer.addComponent(cmpTransPlayer);
            cubePlayer.addComponent(cmpMatCube);
            cmpPlayer.mtxPivot.scaleY(0.5);
    
            let tubePlayer: fc.Node = new fc.Node("Cube One");
            let meshTubePlayer: fc.MeshCube = new fc.MeshCube();
            let cmpTransTubePlayer: fc.ComponentTransform = new fc.ComponentTransform();
            let cmpMeshTubePlayer: fc.ComponentMesh = new fc.ComponentMesh(meshTubePlayer);
            let matTube: fc.Material = new fc.Material("Green", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("GREEN")));
            let cmpMatTube: fc.ComponentMaterial = new fc.ComponentMaterial(matTube);
    
            tubePlayer.addComponent(cmpMeshTubePlayer);
            tubePlayer.addComponent(cmpTransTubePlayer);
            tubePlayer.addComponent(cmpMatTube);
            cmpMeshTubePlayer.mtxPivot.translateY(0.2);
            cmpMeshTubePlayer.mtxPivot.scaleY(0.6);
            cmpMeshTubePlayer.mtxPivot.scaleX(0.2);
            cmpMeshTubePlayer.mtxPivot.scaleZ(0.2);
    
            player.appendChild(tubePlayer);
            player.appendChild(cubePlayer);
            root.appendChild(player);
        }
    }
}