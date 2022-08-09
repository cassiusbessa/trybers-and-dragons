import Races from './Race';

class Elf extends Races {
  private static _members = 0;
  private _maxLifePoints = 99;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._members += 1;
  }

  static createdRacesInstances(): number {
    return Elf._members;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}

export default Elf; 