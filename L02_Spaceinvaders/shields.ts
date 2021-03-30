namespace L02_SpaceInvaders {
    import fc = FudgeCore;

    class ShieldElement {
        xPos: number;
        pos: number;

        constructor(_xPos: number, _pos: number) {
            this.xPos = _xPos;
            this.pos = _pos;
        }

        buildElement(_shield: fc.Node): void {
            let block: fc.Node = new fc.Node("Block " + this.pos);
            block.addComponent(new fc.ComponentTransform());
            let meshBlock: fc.MeshCube = new fc.MeshCube();
            let cmpBlock: fc.ComponentMesh = new fc.ComponentMesh(meshBlock);
            let matBlock: fc.Material = new fc.Material("Orange", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("ORANGE")));
            let cmpMatBlock: fc.ComponentMaterial = new fc.ComponentMaterial(matBlock);

            block.addComponent(cmpBlock);
            block.addComponent(cmpMatBlock);
            cmpBlock.mtxPivot.scaleY(1.5);
            cmpBlock.mtxPivot.scaleX(0.4);
            block.mtxLocal.translateX(this.xPos);
            _shield.appendChild(block);
        }
    }

    export class Shield {
        xPos: number;
        pos: number;

        constructor(_xPos: number, _pos: number) {
            this.xPos = _xPos;
            this.pos = _pos;
        }

        buildShield(): void {
            let shield: fc.Node = new fc.Node("Shield " + this.pos);
            shield.addComponent(new fc.ComponentTransform());

            for (let i: number = 0; i < 5; i++) {
                let shieldElement: ShieldElement = new ShieldElement(-0.8 + i * 0.4, i);
                shieldElement.buildElement(shield);
            }

            shield.mtxLocal.translateX(this.xPos);
            shield.mtxLocal.translateY(2);
            root.addChild(shield);
        }
    }
}