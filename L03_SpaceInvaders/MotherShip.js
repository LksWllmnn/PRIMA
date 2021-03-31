"use strict";
var L03_SpaceInvaders;
(function (L03_SpaceInvaders) {
    class Mothership extends L03_SpaceInvaders.GameObject {
        constructor(_name, _coordinate, _mat, _mesh, _scale) {
            super(_name, _coordinate, _mat, _mesh, _scale);
            this.alive = true;
        }
    }
    L03_SpaceInvaders.Mothership = Mothership;
})(L03_SpaceInvaders || (L03_SpaceInvaders = {}));
//# sourceMappingURL=MotherShip.js.map