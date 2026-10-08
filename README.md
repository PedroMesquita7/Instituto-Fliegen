# Site completo — Instituto Fliegen

Site institucional novo do Instituto Fliegen, com o visual da apresentação 2025, a área **Xadrez Fliegen** (aulas práticas, treino e regras) integrada e a apresentação disponível para download.

É só HTML, CSS e JavaScript: não precisa de servidor, banco de dados nem instalação.

## Ver no computador

Dê dois cliques em `index.html`. Para a fonte Poppins e o mapa aparecerem, o computador precisa estar com internet (sem internet, o site usa a fonte do sistema e continua funcionando).

## Estrutura

```
index.html                     página principal (todas as seções do Instituto)
css/site.css                   estilos da página principal (cores e formas da apresentação)
js/site.js                     menu do celular, cabeçalho e animações de entrada
assets/img/                    logos, favicon e fotos tiradas da apresentação
downloads/
  apresentacao-instituto-fliegen-2025.pdf   apresentação para baixar (versão leve, 2,6 MB)
xadrez/                        área de xadrez (o projeto Xadrez Fliegen, com as cores novas)
  index.html  aulas.html  treinar.html  regras.html
  js/dados-aulas.js            conteúdo das aulas práticas (veja xadrez/README.md)
  docs/                        material interno (não precisa ir para o site no ar)
```

## Seções da página principal

Início · Quem somos · Objetivos · O que propomos / Quem pode participar · O que oferecemos / Horário das aulas · Processo seletivo · Conquistas 2024 & 2025 · Detalhamento das olimpíadas · Oficinas e passeios (Cidade das Abelhas, Intelbras, ETA) · **Aprenda xadrez jogando** · Na mídia · Abrangência · Download da apresentação · Contato e mapa.

## Como atualizar

- **Textos:** abra `index.html` em qualquer editor (até o Bloco de Notas) e troque o texto entre as tags.
- **Horários, números e conquistas:** estão em `index.html`, nas seções `#programa` e `#conquistas`.
- **Nova apresentação:** substitua o arquivo em `downloads/` mantendo o mesmo nome (ou troque o nome nos links de `index.html`). Atualize também o tamanho escrito em "PDF · 16 páginas · 2,6 MB".
- **Aulas de xadrez:** os textos e exercícios estão em `xadrez/js/dados-aulas.js`. Depois de editar, abra `xadrez/verificar-problemas.html` para conferir se cada exercício tem solução.

## Publicar

Suba o conteúdo desta pasta para a hospedagem do domínio institutofliegen.com.br (ou para o GitHub Pages), mantendo `index.html` na raiz. A pasta `xadrez/docs/` é material interno e pode ficar de fora.

## Antes de divulgar

- [ ] Conferir textos, horários e números com a coordenação (vieram da apresentação 2025).
- [ ] Confirmar a autorização de uso das fotos dos alunos e das matérias da imprensa.
- [ ] Testar no celular: menu, botões de inscrição, WhatsApp e download do PDF.
