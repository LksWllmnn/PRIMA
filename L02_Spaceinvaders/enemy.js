"use strict";
var L02_SpaceInvaders;
(function (L02_SpaceInvaders) {
    var fc = FudgeCore;
    let startPosEnemys = [
        { xPosEnemy: -6, yPosEnemy: 15 },
        { xPosEnemy: -4, yPosEnemy: 15 },
        { xPosEnemy: -2, yPosEnemy: 15 },
        { xPosEnemy: 0, yPosEnemy: 15 },
        { xPosEnemy: 2, yPosEnemy: 15 },
        { xPosEnemy: 4, yPosEnemy: 15 },
        { xPosEnemy: 6, yPosEnemy: 15 },
        { xPosEnemy: -6, yPosEnemy: 13 },
        { xPosEnemy: -4, yPosEnemy: 13 },
        { xPosEnemy: -2, yPosEnemy: 13 },
        { xPosEnemy: 0, yPosEnemy: 13 },
        { xPosEnemy: 2, yPosEnemy: 13 },
        { xPosEnemy: 4, yPosEnemy: 13 },
        { xPosEnemy: 6, yPosEnemy: 13 },
        { xPosEnemy: -6, yPosEnemy: 11 },
        { xPosEnemy: -4, yPosEnemy: 11 },
        { xPosEnemy: -2, yPosEnemy: 11 },
        { xPosEnemy: 0, yPosEnemy: 11 },
        { xPosEnemy: 2, yPosEnemy: 11 },
        { xPosEnemy: 4, yPosEnemy: 11 },
        { xPosEnemy: 6, yPosEnemy: 11 }
    ];
    class Enemy {
        constructor(_xPos, _yPos, _pos) {
            this.alive = true;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.pos = _pos;
        }
        buildEnemy() {
            let smallEnemy = new fc.Node("EnemyShip" + this.pos);
            let meshShip = new fc.MeshSphere("ShipMesh", 6, 6);
            let cmpTransShip = new fc.ComponentTransform();
            let cmpShip = new fc.ComponentMesh(meshShip);
            let matShip = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
            let cmpMatShip = new fc.ComponentMaterial(matShip);
            smallEnemy.addComponent(cmpShip);
            smallEnemy.addComponent(cmpTransShip);
            smallEnemy.addComponent(cmpMatShip);
            smallEnemy.mtxLocal.translateY(this.yPos);
            smallEnemy.mtxLocal.translateX(this.xPos);
            L02_SpaceInvaders.root.appendChild(smallEnemy);
        }
    }
    L02_SpaceInvaders.Enemy = Enemy;
    class EnemyMotherShip {
        constructor() {
            this.alive = true;
            this.xPos = 6;
            this.yPos = 16.5;
        }
        startBuildingEnemys() {
            for (let i = 0; i < 21; i++) {
                let newEnemy = new Enemy(startPosEnemys[i].xPosEnemy, startPosEnemys[i].yPosEnemy, i);
                newEnemy.buildEnemy();
            }
        }
        buildEnemyMotherShip() {
            let enemyMotherShip = new fc.Node("Mothership");
            let meshShip = new fc.MeshCube();
            let cmpTransShip = new fc.ComponentTransform();
            let cmpShip = new fc.ComponentMesh(meshShip);
            let matShip = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
            let cmpMatShip = new fc.ComponentMaterial(matShip);
            enemyMotherShip.addComponent(cmpShip);
            enemyMotherShip.addComponent(cmpTransShip);
            enemyMotherShip.addComponent(cmpMatShip);
            cmpShip.mtxPivot.scaleX(2);
            enemyMotherShip.mtxLocal.translateY(this.yPos);
            enemyMotherShip.mtxLocal.translateX(this.xPos);
            L02_SpaceInvaders.root.appendChild(enemyMotherShip);
        }
    }
    L02_SpaceInvaders.EnemyMotherShip = EnemyMotherShip;
    /*function buildEnemy(_xPos: number, _yPos: number, _p: number): void {
        let smallEnemy: fc.Node = new fc.Node("EnemyShip");
        
        let meshShip: fc.MeshSphere = new fc.MeshSphere("ShipMesh", 6, 6);
        let cmpTransShip: fc.ComponentTransform = new fc.ComponentTransform();
        let cmpShip: fc.ComponentMesh = new fc.ComponentMesh(meshShip);
        let matShip: fc.Material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
        let cmpMatShip: fc.ComponentMaterial = new fc.ComponentMaterial(matShip);

        smallEnemy.addComponent(cmpShip);
        smallEnemy.addComponent(cmpTransShip);
        smallEnemy.addComponent(cmpMatShip);
        smallEnemy.mtxLocal.translateY(_yPos);
        smallEnemy.mtxLocal.translateX(_xPos);

        root.appendChild(smallEnemy);
    }*/
    /*export function startBuildingEnemys(): void {
        for (let i: number = 0; i < 21; i++) {
            let newEnemy: Enemy = new Enemy(startPosEnemys[i].xPosEnemy, startPosEnemys[i].yPosEnemy, i);
            newEnemy.buildEnemy();
        }
    }

    export function buildEnemyMotherShip(): void {
        let enemyMotherShip: fc.Node = new fc.Node("Mothership");
        
        let meshShip: fc.MeshCube = new fc.MeshCube();
        let cmpTransShip: fc.ComponentTransform = new fc.ComponentTransform();
        let cmpShip: fc.ComponentMesh = new fc.ComponentMesh(meshShip);
        let matShip: fc.Material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
        let cmpMatShip: fc.ComponentMaterial = new fc.ComponentMaterial(matShip);

        enemyMotherShip.addComponent(cmpShip);
        enemyMotherShip.addComponent(cmpTransShip);
        enemyMotherShip.addComponent(cmpMatShip);
        cmpShip.mtxPivot.scaleX(2);
        enemyMotherShip.mtxLocal.translateY(16.5);
        enemyMotherShip.mtxLocal.translateX(6);

        root.appendChild(enemyMotherShip);
    }*/
})(L02_SpaceInvaders || (L02_SpaceInvaders = {}));
//# sourceMappingURL=enemy.js.map