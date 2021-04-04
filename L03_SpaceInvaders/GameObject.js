"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    var fc = FudgeCore;
    class GameObject extends fc.Node {
        constructor(_name, _coordinates, _mat, _mesh, _scale) {
            super(_name);
            this.coodrinates = _coordinates;
            this.mat = _mat;
            this.mesh = _mesh;
            this.scale = _scale;
            //this.build();
        }
        build() {
            let cmpTransform = new fc.ComponentTransform();
            this.addComponent(cmpTransform);
            this.mtxLocal.translate(this.coodrinates);
            let cmpMesh = new fc.ComponentMesh(this.mesh);
            this.addComponent(cmpMesh);
            cmpMesh.mtxPivot.scaleX(this.scale.x);
            cmpMesh.mtxPivot.scaleY(this.scale.y);
            let cmpMat = new fc.ComponentMaterial(this.mat);
            this.addComponent(cmpMat);
        }
    }
    L03_SpaceInvaders.GameObject = GameObject;
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=GameObject.js.map