import Races from './Race';

class Halfling extends Races {
  private static _members = 0;
  private _maxLifePoints = 60;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._members += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._members;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}

export default Halfling; 