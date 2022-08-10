import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special(enemy: ThisType<Fighter>): void;
  levelUp(): void;
}

export default Fighter;