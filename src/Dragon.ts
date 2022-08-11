import Monster from './Monster';
import getRandomInt from './utils';

export default class Dragon extends Monster {
  constructor(lifePoints = 100, strength = 50) {
    super(lifePoints * getRandomInt(10, 50), strength * getRandomInt(2, 10));
  }
}
