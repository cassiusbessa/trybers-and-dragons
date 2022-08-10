import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  get player1(): Fighter {
    return this._player1;
  }

  get player2(): Fighter {
    return this._player2;
  }

  fight(): number {
    while (this.player1.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      console.log(this.player2.lifePoints);
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}