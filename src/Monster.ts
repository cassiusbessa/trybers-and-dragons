import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    this._lifePoints -= damage;
    console.log(`${this} has received ${damage} damage.`);
    if (this._lifePoints <= 0) this._lifePoints = -1;    
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    console.log(`Monster attacks ${enemy.lifePoints}`);
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
}