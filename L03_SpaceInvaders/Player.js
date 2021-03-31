"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    var fc = FudgeCore;
    class Player extends L03_SpaceInvaders.GameObject {
        constructor(_name, _coodrinates, _mat, _mesh, _scale) {
            super(_name, _coodrinates, _mat, _mesh, _scale);
        }
        build() {
            let cubePlayer = new fc.Node(this.name + " Panzer");
            let cmpTransPlayer = new fc.ComponentTransform();
            let cmpPlayer = new fc.ComponentMesh(this.mesh);
            let cmpMatCube = new fc.ComponentMaterial(this.mat);
            cubePlayer.addComponent(cmpPlayer);
            cubePlayer.addComponent(cmpTransPlayer);
            cubePlayer.addComponent(cmpMatCube);
            cmpPlayer.mtxPivot.scaleY(0.5);
            let canon = new fc.Node(this.name + " Canon");
            let cmpTransCanon = new fc.ComponentTransform();
            let cmpMeshCanon = new fc.ComponentMesh(this.mesh);
            let cmpMatTube = new fc.ComponentMaterial(this.mat);
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
    L03_SpaceInvaders.Player = Player;
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=Player.js.map