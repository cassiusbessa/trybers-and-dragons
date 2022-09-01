import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');
const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const levelUp = (character: Character, index: number): void => {
  for (let i = 0; i < index; i += 1) {
    character.levelUp();
  }
};

levelUp(player1, 100);

const runBattles = (battle: Battle[]): void => {
  battle.forEach((b) => { b.fight(); console.log('fim da luta'); });
};

console.log(runBattles([pvp, pve]));

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};