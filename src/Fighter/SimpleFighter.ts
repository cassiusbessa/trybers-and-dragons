type ISimpleFighter = {
  lifePoints: number;
  strength: number;
};

export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: ISimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}