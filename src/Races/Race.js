"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Races {
    constructor(name, dexterity) {
        this._name = '';
        this._dexterity = 0;
        this._name = name;
        this._dexterity = dexterity;
    }
    get name() { return this._name; }
    get dexterity() { return this._dexterity; }
    set dexterity(dexterity) {
        this._dexterity = dexterity;
    }
    static createdRacesInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Races;
