"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Warrior._members += 1;
    }
    static createdArchetypeInstances() {
        return Warrior._members;
    }
    get energyType() { return this._energyType; }
}
exports.default = Warrior;
Warrior._members = 0;
