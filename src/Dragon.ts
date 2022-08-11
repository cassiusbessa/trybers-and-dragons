import Monster from './Monster';
import getRandomInt from './utils';

export default class Dragon extends Monster {
  constructor(lifePoints = 1000, strength = 100) {
    super(lifePoints * getRandomInt(10, 50), strength * getRandomInt(1, 10));
  }
}