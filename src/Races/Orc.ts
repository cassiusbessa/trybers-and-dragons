import Races from './Race';

class Orc extends Races {
  private static _members = 0;
  private _maxLifePoints = 74;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._members += 1;
  }

  static createdRacesInstances(): number {
    return Orc._members;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}

export default Orc; 