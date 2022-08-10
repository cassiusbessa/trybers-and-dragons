import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

type IFighter = {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
};

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special(enemy: IFighter): void;
  levelUp(): void;
}

export default Fighter;