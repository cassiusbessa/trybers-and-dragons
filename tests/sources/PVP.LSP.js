"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("../../src/Battle");
const Character_1 = require("../../src/Character");
const fight = (battle) => battle.fight();
const result = () => {
    const player1 = new Character_1.default('');
    for (let i = 0; i < 500; i++)
        player1.levelUp();
    const player2 = new Character_1.default('');
    const pvp1 = new Battle_1.PVP(player1, player2);
    const player3 = new Character_1.default('');
    for (let i = 0; i < 500; i++)
        player3.levelUp();
    const player4 = new Character_1.default('');
    const pvp2 = new Battle_1.PVP(player4, player3);
    return [fight(pvp1), fight(pvp2)];
};
