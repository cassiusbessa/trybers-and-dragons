import Races from './Race';

class Dwarf extends Races {
  private static _members = 0;
  private _maxLifePoints = 80;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._members += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._members;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf; 