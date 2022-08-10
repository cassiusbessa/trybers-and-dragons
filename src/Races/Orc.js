"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 74;
        Orc._members += 1;
    }
    static createdRacesInstances() {
        return Orc._members;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Orc._members = 0;
exports.default = Orc;
