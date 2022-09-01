import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _horde: Array<Fighter | SimpleFighter>;
  constructor(player: Fighter, horde: Array<Fighter | SimpleFighter>) {
    super(player);
    this._player1 = player;
    this._horde = horde;
  }

  get player1(): Fighter {
    return this._player1;
  }

  get monsters(): Array<Fighter | SimpleFighter> {
    return this._horde;
  }

  filterDeadMonsters(): Array<Fighter | SimpleFighter> {
    const lifeHorde = this._horde.filter(
      (monster) => monster.lifePoints !== -1,
    );
    return lifeHorde;
  }

  hordeAttack(): void {
    const aliveMonsters = this.filterDeadMonsters();
    for (let i = 0; i < aliveMonsters.length; i += 1) {
      console.log('monstros atacando');
      aliveMonsters[i].attack(this.player1);
    }
  }

  playerAttack(): void {
    const aliveMonsters = this.filterDeadMonsters();
    const random = getRandomInt(0, aliveMonsters.length - 1);
    this.player1.attack(aliveMonsters[random]);
  }

  fight(): void {
    while (this.player1.lifePoints !== -1 
      && this.filterDeadMonsters().length > 0) {
      this.hordeAttack();
      this.playerAttack();
    }
    return this.player.lifePoints === -1 
      ? console.log('a horda venceu') 
      : console.log('player1 venceu');
  }
}