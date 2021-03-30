namespace L02_SpaceInvaders {
    import fc = FudgeCore;

    interface EnemyPosition {
        xPosEnemy: number;
        yPosEnemy: number;
    }

    let startPosEnemys: EnemyPosition[] = [
        {xPosEnemy: -6, yPosEnemy: 15},
        {xPosEnemy: -4, yPosEnemy: 15},
        {xPosEnemy: -2, yPosEnemy: 15},
        {xPosEnemy: 0, yPosEnemy: 15},
        {xPosEnemy: 2, yPosEnemy: 15},
        {xPosEnemy: 4, yPosEnemy: 15},
        {xPosEnemy: 6, yPosEnemy: 15},

        {xPosEnemy: -6, yPosEnemy: 13},
        {xPosEnemy: -4, yPosEnemy: 13},
        {xPosEnemy: -2, yPosEnemy: 13},
        {xPosEnemy: 0, yPosEnemy: 13},
        {xPosEnemy: 2, yPosEnemy: 13},
        {xPosEnemy: 4, yPosEnemy: 13},
        {xPosEnemy: 6, yPosEnemy: 13},

        {xPosEnemy: -6, yPosEnemy: 11},
        {xPosEnemy: -4, yPosEnemy: 11},
        {xPosEnemy: -2, yPosEnemy: 11},
        {xPosEnemy: 0, yPosEnemy: 11},
        {xPosEnemy: 2, yPosEnemy: 11},
        {xPosEnemy: 4, yPosEnemy: 11},
        {xPosEnemy: 6, yPosEnemy: 11}
    ];

    

    export class Enemy {
        alive: boolean;
        xPos: number;
        yPos: number;
        pos: number;

        constructor(_xPos: number, _yPos: number, _pos: number) {
            this.alive = true;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.pos = _pos;
        }

        buildEnemy(): void {
            let smallEnemy: fc.Node = new fc.Node("EnemyShip" + this.pos);
            
            let meshShip: fc.MeshSphere = new fc.MeshSphere("ShipMesh", 6, 6);
            let cmpTransShip: fc.ComponentTransform = new fc.ComponentTransform();
            let cmpShip: fc.ComponentMesh = new fc.ComponentMesh(meshShip);
            let matShip: fc.Material = new fc.Material("Red", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("RED")));
            let cmpMatShip: fc.ComponentMaterial = new fc.ComponentMaterial(matShip);
    
            smallEnemy.addComponent(cmpShip);
            smallEnemy.addComponent(cmpTransShip);
            smallEnemy.addComponent(cmpMatShip);
            smallEnemy.mtxLocal.translateY(this.yPos);
            smallEnemy.mtxLocal.translateX(this.xPos);
    
            root.appendChild(smallEnemy);
        }
    }

    export class EnemyMotherShip {
        alive: boolean;
        xPos: number;
        yPos: number;

        constructor() {
            this.alive = true;
            this.xPos = 6;
            this.yPos = 16.5;
        }

        startBuildingEnemys(): void {
            for (let i: number = 0; i < 21; i++) {
                let newEnemy: Enemy = new Enemy(startPosEnemys[i].xPosEnemy, startPosEnemys[i].yPosEnemy, i);
                newEnemy.buildEnemy();
            }
        }

        buildEnemyMotherShip(): void {
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
            enemyMotherShip.mtxLocal.translateY(this.yPos);
            enemyMotherShip.mtxLocal.translateX(this.xPos);
    
            root.appendChild(enemyMotherShip);
        }
    }

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
}