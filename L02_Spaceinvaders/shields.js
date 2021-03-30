"use strict";
var L02_SpaceInvaders;
(function (L02_SpaceInvaders) {
    var fc = FudgeCore;
    class ShieldElement {
        constructor(_xPos, _pos) {
            this.xPos = _xPos;
            this.pos = _pos;
        }
        buildElement(_shield) {
            let block = new fc.Node("Block " + this.pos);
            block.addComponent(new fc.ComponentTransform());
            let meshBlock = new fc.MeshCube();
            let cmpBlock = new fc.ComponentMesh(meshBlock);
            let matBlock = new fc.Material("Orange", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("ORANGE")));
            let cmpMatBlock = new fc.ComponentMaterial(matBlock);
            block.addComponent(cmpBlock);
            block.addComponent(cmpMatBlock);
            cmpBlock.mtxPivot.scaleY(1.5);
            cmpBlock.mtxPivot.scaleX(0.4);
            block.mtxLocal.translateX(this.xPos);
            _shield.appendChild(block);
        }
    }
    class Shield {
        constructor(_xPos, _pos) {
            this.xPos = _xPos;
            this.pos = _pos;
        }
        buildShield() {
            let shield = new fc.Node("Shield " + this.pos);
            shield.addComponent(new fc.ComponentTransform());
            for (let i = 0; i < 5; i++) {
                let shieldElement = new ShieldElement(-0.8 + i * 0.4, i);
                shieldElement.buildElement(shield);
            }
            shield.mtxLocal.translateX(this.xPos);
            shield.mtxLocal.translateY(2);
            L02_SpaceInvaders.root.addChild(shield);
        }
    }
    L02_SpaceInvaders.Shield = Shield;
})(L02_SpaceInvaders || (L02_SpaceInvaders = {}));
//# sourceMappingURL=shields.js.map