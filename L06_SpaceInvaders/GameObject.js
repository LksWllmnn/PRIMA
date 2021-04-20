"use strict";
var L06_SpaceInvaders;
(function (L06_SpaceInvaders) {
    var fc = FudgeCore;
    class GameObject extends fc.Node {
        constructor(_name, _coordinates, _scale) {
            super(_name);
            this.coodrinates = _coordinates;
            this.scale = _scale;
        }
        build() {
            this.rect = new fc.Rectangle(this.coodrinates.x, this.coodrinates.y, this.scale.x, this.scale.y, fc.ORIGIN2D.CENTER);
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
        gotShot(_target) {
            return this.rect.collides(_target.rect);
        }
        setRectPosition() {
            this.rect.position.x = this.mtxLocal.translation.x - this.rect.size.x / 2;
            this.rect.position.y = this.mtxLocal.translation.y - this.rect.size.y / 2;
        }
    }
    GameObject.mesh = new fc.MeshCube("Quad");
    GameObject.material = new fc.Material("White", fc.ShaderUniColor, new fc.CoatColored());
    L06_SpaceInvaders.GameObject = GameObject;
})(L06_SpaceInvaders || (L06_SpaceInvaders = {}));
//# sourceMappingURL=GameObject.js.map