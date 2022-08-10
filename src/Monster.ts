import { SimpleFighter } from './Fighter';
import getRandomInt from './utils';

export default class Monster implements SimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
      console.log(`${this.name} has received ${damage} damage.`);
    }
    if (this._lifePoints <= 0) return -1;
    
    return this._lifePoints;
  }
}