"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Ranger._members += 1;
    }
    static createdArchetypeInstances() {
        return Ranger._members;
    }
    get energyType() { return this._energyType; }
}
exports.default = Ranger;
Ranger._members = 0;
