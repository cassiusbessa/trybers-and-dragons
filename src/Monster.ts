import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    this._lifePoints -= damage;
    console.log(`$The monster has received ${damage} damage.`);
    if (this._lifePoints <= 0) this._lifePoints = -1;    
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
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