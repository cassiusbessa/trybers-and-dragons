import Energy from '../Energy';

type IFighter = {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
};

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: IFighter): void;
  special(enemy: IFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;

}

export default Fighter;