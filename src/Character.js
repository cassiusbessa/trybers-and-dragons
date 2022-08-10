"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Races_1 = require("./Races");
const Archetypes_1 = require("./Archetypes");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this._race = new Races_1.Elf(name, (0, utils_1.default)(1, 10));
        this._archetype = new Archetypes_1.Mage(name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get race() {
        return this._race;
    }
    get name() {
        return this._race.name;
    }
    get dexterity() {
        return this.race.dexterity;
    }
    get archetype() {
        return this._archetype;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get energy() {
        return (Object.assign({}, this._energy));
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this.defense;
        if (damage > 0) {
            this._lifePoints -= damage;
            console.log(`${this.name} has received ${damage} damage.`);
        }
        if (this._lifePoints <= 0)
            return -1;
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this.strength);
    }
    maxHealthValidation() {
        if (this.maxLifePoints > this.race.maxLifePoints) {
            this._maxLifePoints = this.race.maxLifePoints;
            console.log(`${this.name} reached maximum health potential`);
        }
        this._lifePoints = this._maxLifePoints;
        console.log(`${this.name} has leveled up!`, this);
    }
    primaryAtributtesIncrement() {
        this._strength += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        this.maxHealthValidation();
        this._race.dexterity += (0, utils_1.default)(1, 10);
    }
    healthAtributtesSet() {
        this._energy.amount = 10;
        this._lifePoints = this._maxLifePoints;
    }
    levelUp() {
        this.primaryAtributtesIncrement();
        this.healthAtributtesSet();
    }
    special(enemy) {
        console.log(`${this.name} 
    it takes out its fangs, bites the enemy's neck and sucks its soul!`);
        const soulVamp = this._strength * ((100 + (0, utils_1.default)(1, 10)) / 100);
        const currentEnemyLife = enemy.lifePoints;
        const hurtEnemyLife = enemy.receiveDamage(soulVamp);
        const damage = currentEnemyLife - hurtEnemyLife;
        this._lifePoints += damage;
        this._energy.amount -= 4;
    }
}
exports.default = Character;
