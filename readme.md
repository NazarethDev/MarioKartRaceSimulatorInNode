# Simulador de Corridas Mario Kart

Projeto elaborado em bootcamp de Mobile Developer com a Dio! 

Elaborado 100% em JavaScript com node! 

## Como executar
Este é um projeto elaborado em JavaScript, no entanto, alguns recursos podem estar disponíveis através de execução via terminal, uma vez que o projeto possui importações que podem não ser compatíveis com o console de navegadores.

Tendo isso em consideração, realize o download do projeto em seu dispositivo com a linguagem JavaScript instalada, assim como o gerenciador de pacotes NPM instalado.

Com estes pré-requisitos atendidos, mais uma vez, ressalta-se a importância de que o programa seja executado no terminal, uma vez que IDE's - como o Visual Studio Code ao se usar a extensão 'Run Code'- não possuem em seu output recursos que disponibilizam a entrada de dados do usuário, como é requerido para que este programa funcione.

## Regras de negócio atendidas

Todas as regras de negócio foram aplicadas a esse projeto. Foram solicitado e atendido:

- O sistema recebe dois personagens para disputar a corrida em um objeto cada;

- No total, o jogo ocorre em 05 turnos distintos e aleatórios

- 03 tipos de pistas, reta, curva e confronto:

    - Reta: cada jogador sorteia um número em um dado de 06 lados. Após isso, soma-se o resultado ao atributo velocidade dos personagens de acordo com os números que cada um sorteou. O que termina com a maior velocidade, ganha um ponto;

    - Curva: cada jogador sorteia um número em um dado de 06 lados. Após isso, soma-se o resultado ao atributo manobramanobrabilidade dos personagens de acordo com os números que cada um sorteou. O que termina com a maior manobrabilidade, ganha um ponto;

    - Confronto: cada jogador sorteia um número em um dado de 06 lados. Após isso, soma-se o resultado ao atributo poder dos personagens de acordo com os números que cada um sorteou. O que termina com o poder de menor valor, perde um ponto.

- Requisito de vitória foi atendido, sendo o jogador campeão definido pela quantidade total de pontos que possuem. O participante que tem mais pontos no final dos 05 turnos, vence o jogo.

## Adicções e alterações realizadas no projeto proposto no Bootcamp

Além dos requisitos exigidos, novas funcionalidades foram adicionadas, entre elas: 

- Seleção dos personagens: os participantes da corrida podem ser selecionados por meio do terminal, assim aumentando a interatividade do projeto com o usuário

- Menu de seleção dos personagens: Como a seleção de personagens pelo usuário foi disponibilizada, fez-se necessário a impressão dos nomes dos usuários e seus atributos.

- Refatoração de objetos: os personagens foram refatorados no código para dentro da array `players`. Desta maneira, se tornou mais simples a adição de novos personagens ao código no futuro, além da utilidade na apresentação e seleção dos personagens para a seleção dos usuários. 

- Mais logs por rodada: logs que apresentam os empates nas corridas foram aplicados a todos os tipos de pistas, além de correção para os logs de vitória nas pistas do tipo 'confronto'. 

### Contato do desenvolvedor

Sinta-se a vontade para entrar em contrato comigo sobre esse projeto, oportunidades de desenvolvimento ou outros assuntos! 

LinkedIn: https://www.linkedin.com/in/lorrannazareth/

Email: lorran.nazareth@gmail.com


-----

# Mario Kart Race Simulator

Project developed during the Mobile Developer Bootcamp with Dio!

Developed entirely in JavaScript using Node!

## How to Run
This project was built using JavaScript; however, some features are only available via the terminal, as the project contains imports that may not be compatible with browser consoles.

With this in mind, download the project to your device with JavaScript installed, as well as the NPM package manager.

Once these prerequisites are met, it's important to emphasize again that the program must be run in the terminal, as IDEs—such as Visual Studio Code, which uses the "Run Code" extension—do not support user input via console output, which is necessary for the program to work.

## Business Rules Implemented

All business rules have been applied to this project. The following were requested and implemented:

- The system receives two characters to compete in the race, each represented by an object;

- The game consists of 5 distinct, randomized rounds;

- 3 track types: straight, curved, and duel:

    - Straight: Each player rolls a 6-sided die. The result is then added to their character's speed attribute. The player with the highest final speed earns one point;

    - Curved: Each player rolls a 6-sided die. The result is then added to their character's maneuverability attribute. The player with the highest final maneuverability earns one point;

    - Duel: Each player rolls a 6-sided die. The result is then added to their character's power attribute. The player with the lowest final power loses one point.

- Win condition implemented: The winner is determined by the total number of points. The player with the most points at the end of the 5 rounds wins the game.

## Additions and Changes Made to the Proposed Project

In addition to the required features, new functionality has been added, including:

- Character Selection: Race participants can be selected via the terminal, increasing the project's interactivity with the user;

- Character Selection Menu: Since user-selectable characters are now available, the names and attributes of all characters are displayed to the user;

- Object Refactoring: Characters have been refactored into an array called `players`. This makes it easier to add new characters in the future and helps with displaying and selecting them;

- More Round Logs: Logs showing draws during races have been implemented for all track types, and the win log on duel tracks has been fixed.

### Developer Contact

Feel free to contact me about this project, development opportunities, or anything else!

LinkedIn: https://www.linkedin.com/in/lorrannazareth/

Email: lorran.nazareth@gmail.com