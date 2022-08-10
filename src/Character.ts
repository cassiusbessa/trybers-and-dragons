import Fighter from './Fighter';
import Races, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Races;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, getRandomInt(1, 10));
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  get race(): Races {
    return this._race;
  }

  get name(): string {
    return this._race.name;
  }

  get dexterity(): number {
    return this.race.dexterity;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return ({ ...this._energy });
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) return -1;
    console.log(`${this.name} has received ${damage} damage.`);
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  private maxHealthValidation():void {
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
      console.log(`${this.name} reached maximum health potential`);
    }
    this._lifePoints = this._maxLifePoints;
    console.log(`${this.name} has leveled up!`, this);
  }

  private primaryAtributtesIncrement():void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this.maxHealthValidation();
    this._race.dexterity += getRandomInt(1, 10);
  }

  private healthAtributtesSet():void {
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  } 

  levelUp(): void {
    this.primaryAtributtesIncrement();
    this.healthAtributtesSet();
  }

  special(enemy: Fighter): void {
    console.log(`${this.name} 
    it takes out its fangs, bites the enemy's neck and sucks its soul!`);
    const soulVamp = this._strength * ((100 + getRandomInt(1, 10)) / 100);
    const currentEnemyLife = enemy.lifePoints;
    const hurtEnemyLife = enemy.receiveDamage(soulVamp);
    const damage = currentEnemyLife - hurtEnemyLife;
    this._lifePoints += damage;
    this._energy.amount -= 4;
  }
}
