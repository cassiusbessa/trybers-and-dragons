import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected player: Fighter) { }

  // Should return 1 if player wins, -1 otherwise
  abstract fight(): void;
}

export default Battle;
