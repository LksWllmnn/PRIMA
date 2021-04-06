"use strict";
var L04_SpaceInvaders;
(function (L04_SpaceInvaders) {
    var fc = FudgeCore;
    class GameObject extends fc.Node {
        constructor(_name, _coordinates, _scale) {
            super(_name);
            this.coodrinates = _coordinates;
            this.scale = _scale;
        }
        build() {
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            this.buildMesh(GameObject.mesh);
            let cmpMat = new fc.ComponentMaterial(GameObject.material);
            this.addComponent(cmpMat);
        }
        buildMesh(_meshOfObject = GameObject.mesh) {
            let cmpMesh = new fc.ComponentMesh(_meshOfObject);
            this.addComponent(cmpMesh);
            cmpMesh.mtxPivot.scaleX(this.scale.x);
            cmpMesh.mtxPivot.scaleY(this.scale.y);
            cmpMesh.mtxPivot.scaleZ(this.scale.z);
        }
    }
    GameObject.mesh = new fc.MeshCube("Quad");
    GameObject.material = new fc.Material("White", fc.ShaderUniColor, new fc.CoatColored());
    L04_SpaceInvaders.GameObject = GameObject;
})(L04_SpaceInvaders || (L04_SpaceInvaders = {}));
//# sourceMappingURL=GameObject.js.map