import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const players = [
    null,

    {
        nome: "Mario",
        velocidade: 4,
        manobrabilidade: 3,
        poder: 3,
        pontos: 0,
    },
    {
        nome: "Luigi",
        velocidade: 3,
        manobrabilidade: 4,
        poder: 4,
        pontos: 0,
    },
    {
        nome: "Peach",
        velocidade: 3,
        manobrabilidade: 4,
        poder: 2,
        pontos: 0,
    },
    {
        nome: "Bowser",
        velocidade: 5,
        manobrabilidade: 2,
        poder: 5,
        pontos: 0
    },
    {
        nome: "Yoshi",
        velocidade: 2,
        manobrabilidade: 4,
        poder: 3,
        pontos: 0
    },
    {
        nome: "Donkey Kong",
        velocidade: 2,
        manobrabilidade: 2,
        poder: 5,
        pontos: 0
    }

];


async function chooseCharacter() {
    const rl = readline.createInterface({ input, output });

    console.log("🏁 SELECIONE DOIS PILOTOS 🏁\n");
    for (let i = 1; i < players.length; i++) {
        const character = players[i];
        console.log(`${i} - ${character.nome} - velocidade: ${character.velocidade} | manobras: ${character.manobrabilidade} | poder: ${character.poder} `);
        console.log("---------------------------------------------------")
    };
    console.log("\n");


    /*  console.log("01 - Mario - velocidade: 4 | manobras: 3 | poder: 3");
        console.log("02 - Luigi - velocidade: 3 | manobras: 4 | poder: 4");
        console.log("03 - Peach - velocidade: 3 | manobras: 4 | poder: 2");
        console.log("04 - Bowser - velocidade: 5 | manobras: 2 | poder: 5");
        console.log("05 - Yoshi - velocidade: 2 | manobras: 4 | poder: 3");
        console.log("06 - Donkey Kong - velocidade: 2 | manobras: 2 | poder: 5"); */

    let characterSelected1 = Number(await rl.question("Primeiro competidor: "));
    let characterSelected2 = Number(await rl.question("Segundo competidor: "));
    console.log("\n");

    rl.close();

    const player1 = players[characterSelected1];
    const player2 = players[characterSelected2];


    return [player1, player2];

};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandonBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "reta";
            break;
        case random < 0.66:
            result = "curva";
            break;
        default:
            result = "confronto";
            break;
    }
    return result;
};

async function logRollResult(characterName, block, diceResult, atribute) {
    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${atribute} = ${diceResult + atribute}`);
};

async function playRaceEngine(character1, character2) {
    for (let i = 1; i <= 5; i++) {
        console.log(`🚦🏁 Rodada ${i}`);

        //sortear bloco
        let block = await getRandonBlock();
        console.log(`O bloco é ${block}`);

        //rolar dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "reta") {
            totalTestSkill1 = diceResult1 + character1.velocidade;
            totalTestSkill2 = diceResult2 + character2.velocidade;
            await logRollResult(character1.nome, "velocidade", diceResult1, character1.velocidade);
            await logRollResult(character2.nome, "velocidade", diceResult2, character2.velocidade);
            if (totalTestSkill1 === totalTestSkill2) {
                console.log("os dois empataram!");
            };
        };

        if (block === "curva") {
            totalTestSkill1 = diceResult1 + character1.manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.manobrabilidade;

            await logRollResult(character1.nome, "manobrabilidade", diceResult1, character1.manobrabilidade);
            await logRollResult(character2.nome, "manobrabilidade", diceResult2, character2.manobrabilidade);

            if (totalTestSkill1 === totalTestSkill2) {
                console.log("os dois empataram!");
            };
        };

        if (block === "confronto") {
            let powerResult1 = diceResult1 + character1.poder;
            let powerResult2 = diceResult2 + character2.poder;

            console.log(`${character1.nome} confrontou ${character2.nome}!`);

            await logRollResult(character1.nome, "poder", diceResult1, character1.poder);
            await logRollResult(character2.nome, "poder", diceResult2, character2.poder);

            if (powerResult1 > powerResult2) {
                console.log(`${character1.nome} venceu o confronto!!`);
                if (character2.pontos > 0) {
                    console.log(`${character2.nome} perdeu um ponto :(`)
                    character2.pontos--;
                }
            }

            if (powerResult2 > powerResult1) {
                console.log(`${character2.nome} venceu o confronto!!`);
                if (character1.pontos > 0) {
                    console.log(`${character1.nome} perdeu um ponto :(`)
                    character1.pontos--;
                }
            }

            if (powerResult1 === powerResult2) {
                console.log("Confronto empatado! Nenhum ponto foi perdido");
            }


        }

        //verifica o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.nome} marcou um ponto!`);
            character1.pontos++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.nome} marcou um ponto!`);
            character2.pontos++;
        }

        console.log("\n-------------------")
    };
};

async function declaireWinner(character1, character2) {
    console.log("::: RESULTADO FINAL :::");
    console.log("\n");
    console.log(`${character1.nome}: ${character1.pontos} pontos(s)`);
    console.log(`${character2.nome}: ${character2.pontos} pontos(s)`);
    if (character1.pontos > character2.pontos) {
        console.log(`${character1.nome} venceu a corrida! Parabéns! :) \n`);
    } else if (character2.pontos > character1.pontos) {
        console.log(`${character2.nome} venceu a corrida! Parabéns! :)\n`);
    } else {
        console.log("A corrida terminou em empate\n");
    }
};

(async function main() {
    console.log(`🏁🚦 A corrida vai começar!...\n`);
    const [characterSelected1, characterSelected2] = await chooseCharacter();
    await playRaceEngine(characterSelected1, characterSelected2);
    await declaireWinner(characterSelected1, characterSelected2);
})();

