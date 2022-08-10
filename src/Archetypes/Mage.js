"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        Mage._members += 1;
    }
    static createdArchetypeInstances() {
        return Mage._members;
    }
    get energyType() { return this._energyType; }
}
exports.default = Mage;
Mage._members = 0;
