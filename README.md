# Revi

Este repositório é um **MVP** (produto mínimo viável) em site estático do **Revi**, um aplicativo voltado à organização e revisão de estudos. A proposta é **reproduzir no navegador a experiência nativa** de como o app funcionará em dispositivos móveis: layout em mockup, fluxo entre telas e interações próximas do produto final.

O fluxo cobre splash, autenticação, captura de material (câmera), organização em **pastas** e **assuntos**, visualização de **conteúdo** (fotos da lousa/caderno) e ferramentas de apoio em **IA** (flash cards, resumo e simulado de prova).

**Disciplinas de entrega** — FIAP:

- **Web Development** (prof. Caio Vinicius)
- **Frontend Design** (prof. Cyntia Sayuri)

## Protótipo (Figma)

O design de referência está no protótipo interativo: [Challenge Jovi — Mansour Pixels (Figma)](https://www.figma.com/proto/c26FblDsz0GAEZziFkU9oz/Challenge-Jovi---Mansour-Pixels?node-id=16-767&t=Xi2xA4Kp7QtLAsJE-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A6011&starting-point-node-id=16%3A767).

## Funcionalidades (telas)

| Área | Arquivo | Descrição |
|------|---------|-----------|
| Entrada | [`index.html`](./index.html) | Tela inicial com splash e logo. |
| Início / câmera | [`home.html`](./home.html) | Pré-visualização da câmera, captura, galeria e navegação para Pastas. |
| Pastas | [`pastas.html`](./pastas.html) | Listagem e criação de pastas (ex.: disciplinas), busca e barra inferior. |
| Assuntos | [`assuntos.html`](./assuntos.html) | Assuntos dentro de uma pasta, pesquisa e modal para novo assunto. |
| Conteúdo | [`conteudo.html`](./conteudo.html) | Grade de imagens do assunto e atalhos para as ferramentas de IA. |
| Autenticação | [`auth/`](./auth/) | [`login.html`](./auth/login.html), [`cadastro.html`](./auth/cadastro.html) e [`esqueci-senha.html`](./auth/esqueci-senha.html). |
| IA (estudo) | [`ia/`](./ia/) | [`flash-cards.html`](./ia/flash-cards.html), [`resumo.html`](./ia/resumo.html) e [`simulado-prova.html`](./ia/simulado-prova.html). |

## Tecnologias

- HTML5, CSS3 e JavaScript (sem framework).
- [Font Awesome 6](https://fontawesome.com/) (CDN) para ícones.
- Estilos e scripts em [`assets/styles/`](./assets/styles/) e [`assets/scripts/`](./assets/scripts/); imagens e logo em [`assets/images/`](./assets/images/).

## Como executar localmente

Abra `index.html` no navegador ou sirva a pasta do projeto com um servidor estático (recomendado para testar a câmera e caminhos relativos).

## Estrutura principal

```
website/
├── index.html
├── home.html
├── pastas.html
├── assuntos.html
├── conteudo.html
├── auth/
├── ia/
└── assets/
    ├── images/
    ├── scripts/
    └── styles/
```

## Integrantes

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/88509491?v=4" width="115" alt="Foto de Henrique Bueno"/><br>
      <sub>
        <b>Henrique Bueno - RM570591</b>
      </sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/163877731?v=4" width="115" alt="Foto de Állex Brandão"/><br>
      <sub>
        <b>Állex Brandão - RM571383</b>
      </sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/53922235?v=4" width="115" alt="Foto de Erick Nathan"/><br>
      <sub>
        <b>Erick Nathan - RM573635</b>
      </sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/132668384?v=4" width="115" alt="Foto de Murilo Gomes"/><br>
      <sub>
        <b>Murilo Gomes - RM570941</b>
      </sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/108024578?v=4" width="115" alt="Foto de Enzo Abreu"/><br>
      <sub>
        <b>Enzo Abreu - RM572995</b>
      </sub>
    </td>
  </tr>
</table>
