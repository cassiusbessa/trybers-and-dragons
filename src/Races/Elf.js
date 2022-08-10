"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf._members += 1;
    }
    static createdRacesInstances() {
        return Elf._members;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Elf._members = 0;
exports.default = Elf;
