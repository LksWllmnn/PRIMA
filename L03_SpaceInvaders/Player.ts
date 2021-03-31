namespace L03_SpaceInvaders {
    import fc = FudgeCore;

    export class Player extends GameObject {

        constructor(_name: string, _coodrinates: fc.Vector3, _mat: fc.Material, _mesh: fc.Mesh, _scale: fc.Vector2) {
            super(_name, _coodrinates, _mat, _mesh, _scale);
        }

         build(): void {
            let cubePlayer: fc.Node = new fc.Node(this.name + " Panzer");
            let cmpTransPlayer: fc.ComponentTransform = new fc.ComponentTransform();
            let cmpPlayer: fc.ComponentMesh = new fc.ComponentMesh(this.mesh);
            let cmpMatCube: fc.ComponentMaterial = new fc.ComponentMaterial(this.mat);
    
            cubePlayer.addComponent(cmpPlayer);
            cubePlayer.addComponent(cmpTransPlayer);
            cubePlayer.addComponent(cmpMatCube);
            cmpPlayer.mtxPivot.scaleY(0.5);
    
            let canon: fc.Node = new fc.Node(this.name + " Canon");
            let cmpTransCanon: fc.ComponentTransform = new fc.ComponentTransform();
            let cmpMeshCanon: fc.ComponentMesh = new fc.ComponentMesh(this.mesh);
            let cmpMatTube: fc.ComponentMaterial = new fc.ComponentMaterial(this.mat);
    
            canon.addComponent(cmpMeshCanon);
            canon.addComponent(cmpTransCanon);
            canon.addComponent(cmpMatTube);
            cmpMeshCanon.mtxPivot.translateY(0.2);
            cmpMeshCanon.mtxPivot.scaleY(0.6);
            cmpMeshCanon.mtxPivot.scaleX(0.2);
            cmpMeshCanon.mtxPivot.scaleZ(0.2);
    
            this.appendChild(canon);
            this.appendChild(cubePlayer);
        }
    }
}