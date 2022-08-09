import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _members = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._members += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._members;
  }

  get energyType(): EnergyType { return this._energyType; }
}
