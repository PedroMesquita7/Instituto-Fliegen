# Xadrez Fliegen

Site de apoio ao aprendizado e ao treino de xadrez para os alunos do Instituto Fliegen.
Projeto de extensão (Atividade Extensionista II, UNINTER) — ODS 4 (Educação de Qualidade) e ODS 10 (Redução das Desigualdades).

| Página | O que faz |
|---|---|
| `index.html` | Início, "por onde começar" e os princípios de acessibilidade |
| `aulas.html` | **Aulas práticas**: trilha com 4 módulos e 19 aulas (58 exercícios) no tabuleiro |
| `treinar.html` | 10 problemas de "mate em 1", 6 de "mate em 2", partidas contra o computador (Fácil e Médio) e jogo em dupla no mesmo aparelho |
| `regras.html` | Todas as regras num só lugar, com exemplos em que se toca na peça (para consulta) |
| `verificar-problemas.html` | Página de apoio (fora do menu): confere se cada problema e cada exercício das aulas tem solução |

Não tem cadastro, senha, banco de dados nem servidor. É só HTML, CSS e JavaScript.

## Aulas práticas

| Módulo | Aulas |
|---|---|
| 1. As peças do xadrez | A torre · O bispo · A dama · O rei · O cavalo · O peão (inclui promoção) |
| 2. Fundamentos | Capturar · Defender · Combate · Xeque em 1 · Salve o rei · Mate em 1 |
| 3. Intermediário | Posição inicial · Roque · En passant · Rei afogado |
| 4. Táticas | Valor das peças · Garfo · Cravada · Desafio: mate em 2 (leva à página Treinar) |

Tipos de exercício:

- **Estrelas:** a pessoa move a peça para pegar as estrelas ou capturar peças pretas que ficam paradas. O site calcula o menor número de lances e diz se dá para fazer melhor. Se a pessoa fizer um caminho sem volta (por exemplo, com o peão), o exercício recomeça sozinho.
- **Toque na casa:** perguntas sobre a posição inicial ("onde começa a dama?").
- **Posição real:** as brancas jogam e o site confere o objetivo (dar xeque, sair do xeque, dar mate, fazer o roque, en passant, afogar, proteger uma peça, capturar sem perder peça, escolher o lance certo ou completar uma tática com resposta das pretas).

Todo exercício tem **Dica** (primeiro mostra a peça, depois a casa) e **Recomeçar**. Lance errado volta sozinho. O progresso fica salvo só no aparelho (dá para apagar na própria página).

### Mudar ou acrescentar exercícios

Edite `js/dados-aulas.js` (o começo do arquivo explica cada campo). Para montar uma posição real, use o editor do lichess.org/editor e copie o FEN. **Depois de editar, abra `verificar-problemas.html`:** ela confere se cada exercício é possível e se a posição é legal.

## Ver o site no seu computador

Dê dois cliques em `index.html`. Funciona sem internet (só a fonte Poppins precisa de internet; sem ela, o site usa a fonte do aparelho).

## Publicar na internet (GitHub Pages, grátis)

1. Crie um repositório **público** no GitHub.
2. Em *Add file → Upload files*, arraste o conteúdo da pasta do site. O `index.html` tem que ficar na raiz.
3. Em *Settings → Pages*, escolha *Deploy from a branch*, branch `main` e pasta `/ (root)`. Salve.
4. Espere 1 a 2 minutos e teste no celular.

## Como o site aplica os 7 Princípios do Desenho Universal

| Princípio | No site |
|---|---|
| Igualitário | Gratuito, sem cadastro e sem senha |
| Adaptável | Texto ampliável (A− / A+), alto contraste, uso por toque, mouse ou teclado (setas e Enter) |
| Intuitivo | Aulas curtas em ordem, frases simples, mesmo menu em todas as páginas |
| Informação de fácil percepção | Destinos e capturas marcados por forma (ponto e anel), não só por cor; cada casa tem nome para leitores de tela; mensagens em linguagem simples |
| Tolerância ao erro | Lance errado volta sozinho; "Dica" e "Recomeçar" em todos os exercícios; "Desfazer lance" na partida |
| Baixo esforço físico | Mover = tocar a peça e a casa; botões grandes (mínimo de 44 a 48 px) |
| Dimensão e espaço | Layout responsivo; no celular, o enunciado aparece acima do tabuleiro |

## Limitações

- O computador do Treinar é simples (Fácil: quase ao acaso; Médio: pensa 2 lances à frente).
- O jogo em dupla é só no mesmo aparelho.
- Não é possível arrastar peças; o movimento é por toque/clique em duas etapas.
- As peças usam símbolos de xadrez das fontes do aparelho, então o aspecto varia um pouco entre Android, iPhone e computadores.
- O progresso fica salvo só no aparelho de cada pessoa. O site não envia nem coleta dados e não registra acessos.
- Não troque o `vendor/chess.min.js` (versão 1.4.0) sem testar tudo de novo.

## Créditos e licenças

- Validação dos lances: [chess.js](https://github.com/jhlywa/chess.js) 1.4.0, licença BSD-2 (`vendor/chess.js-LICENSE.txt`).
- A organização da trilha de aulas segue a sequência clássica de ensino do xadrez (peças → fundamentos → lances especiais → táticas). Textos, posições e código foram escritos para este projeto.
- Logo e nome: Instituto Fliegen.

## Estrutura de arquivos

```
index.html  aulas.html  treinar.html  regras.html
verificar-problemas.html      (apoio para quem administra; fora do menu)
css/estilo.css
js/dados-aulas.js             (conteúdo das aulas práticas)
js/aulas-motor.js  js/aulas.js
js/dados-problemas.js         (problemas do Treinar)
js/logica.js  js/tabuleiro.js  js/comum.js  js/regras.js  js/treinar.js
vendor/chess.min.js           (biblioteca chess.js + licença)
assets/                       (logo e ícone)
docs/                         (material interno: passos finais e modelo de declaração)
```
