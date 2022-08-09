import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _members = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._members += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._members;
  }

  get energyType(): EnergyType { return this._energyType; }
}
