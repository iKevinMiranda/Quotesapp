<div align="center">

# ✨ Quotes App

**Citações inspiradoras com experiência premium — simples, rápido e bonito.**

Tipografia do sistema, cartão em vidro fosco, modo claro/escuro automático e integração robusta com APIs.

<br />

[![Demo ao vivo](https://img.shields.io/badge/▶_Demo_ao_vivo-quotesapp--amber.vercel.app-000?style=for-the-badge&logo=vercel&logoColor=white)](https://quotesapp-amber.vercel.app/)

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/API-REST-0071E3?style=for-the-badge)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)

<br />

[Demo ao vivo](https://quotesapp-amber.vercel.app/) ·
[Funcionalidades](#-funcionalidades) ·
[O que eu atualizei](#-o-que-eu-atualizei) ·
[Como rodar](#-como-rodar) ·
[Estrutura](#-estrutura-do-projeto) ·
[Autor](#-autor)

</div>

---

## 📖 Sobre

O **Quotes App** é um site estático que exibe citações aleatórias em uma interface pensada para ser **limpa, calma e responsiva** — no espírito do design da Apple: muito espaço em branco, hierarquia clara e microinterações discretas.

Este README documenta a **grande atualização** que fiz no projeto: saí de um protótipo básico com Bootstrap e API instável para uma aplicação **completa, confiável e com identidade visual própria**.

A versão publicada está no ar na **[Vercel](https://quotesapp-amber.vercel.app/)** — ideal para testar sem clonar o repositório.

---

## 🌐 Demo ao vivo

| | |
|---|---|
| **URL** | [https://quotesapp-amber.vercel.app/](https://quotesapp-amber.vercel.app/) |
| **Hospedagem** | [Vercel](https://vercel.com/) (deploy contínuo a partir do GitHub) |
| **O que testar** | Nova citação, copiar, compartilhar (mobile) e modo claro/escuro do sistema |

---

## 🚀 Funcionalidades

| Recurso | Descrição |
|--------|-----------|
| **Nova citação** | Busca frases aleatórias na web com um clique |
| **Copiar** | Copia texto + autor para a área de transferência |
| **Compartilhar** | Web Share API em dispositivos compatíveis |
| **Modo claro / escuro** | Acompanha `prefers-color-scheme` do sistema |
| **Offline parcial** | Citações locais quando as APIs não respondem |
| **Feedback visual** | Loading no botão, mensagens de status e animação na troca de frase |
| **Acessibilidade** | `aria-live`, `aria-busy`, foco visível nos botões |

---

## 🛠 O que eu atualizei

### Design & UX

- Removi **Bootstrap** e passei para **CSS customizado** com variáveis (`:root`) e tema coerente
- Adotei stack tipográfica **`-apple-system` / SF Pro** para sensação nativa no macOS e iOS
- Criei **cartão com glassmorphism** (`backdrop-filter`, bordas suaves, sombras leves)
- Paleta inspirada na Apple: fundo `#f5f5f7`, destaque **`#0071e3`**, textos secundários equilibrados
- **Gradientes radiais** sutis no fundo (sem depender de imagens quebradas)
- Botões em **formato pílula**, estados hover/active e spinner durante o carregamento
- Layout **mobile-first** com tipografia fluida (`clamp`) e ações empilhadas em telas pequenas
- Rodapé minimalista com **ano dinâmico** via JavaScript

### HTML & estrutura

- Marcação **semântica**: `header`, `main`, `article`, `footer`
- Meta tags de **descrição** e **`theme-color`** para PWA-like na barra do navegador
- Separação clara entre **texto da citação** e **autor**
- Script carregado com **`defer`** (corrige bug de DOM não pronto)
- Remoção de links mortos (Termos/Privacidade `#`) e texto placeholder *"Alteração no web"*

### JavaScript & APIs

- Substituí **`api.quotable.io`** (instável/descontinuada) por:
  - **[DummyJSON](https://dummyjson.com/docs/quotes)** (primária)
  - **[ZenQuotes](https://zenquotes.io/)** (secundária)
- Implementei **cadeia de fallback**: se ambas falharem → citações locais curadas
- Tratamento de erros, **estado de loading** e prevenção de cliques duplos
- **Clipboard API** para copiar com confirmação temporária na tela
- **Web Share API** (botão só aparece quando `navigator.share` existe)
- Animação ao renderizar nova citação (`quote-in`)

### Limpeza & manutenção

- Eliminei referências a **`assets/back.jpg`** e **`assets/favicon.png`** inexistentes
- Corrigi typo no rodapé (**Kevin Miranda**)
- Atualizei este **README** com documentação clara do que mudou
- **Deploy na Vercel** — app acessível em [quotesapp-amber.vercel.app](https://quotesapp-amber.vercel.app/)

---

## 🔄 Antes → Depois

| Antes | Depois |
|-------|--------|
| Bootstrap 4 + footer escuro genérico | UI própria, estilo Apple, modo escuro nativo |
| Uma API (`quotable.io`) | Duas APIs + fallback offline |
| Script no `<head>` sem `defer` | Carregamento seguro após o DOM |
| Só botão "Nova Citação" | Nova citação, copiar e compartilhar |
| Background JPG ausente | Gradientes CSS sempre funcionais |
| Pouca feedback ao usuário | Loading, status e animações |

---

## ⚙ Como rodar

**Opção 1 — Online (recomendado)**

Acesse a demo publicada: **[quotesapp-amber.vercel.app](https://quotesapp-amber.vercel.app/)**

**Opção 2 — Abrir local**

Abra `index.html` no navegador.

**Opção 3 — Servidor local**

Evita limitações de CORS ao chamar as APIs:

```bash
cd Quotesapp
npx serve .
```

Acesse o endereço exibido no terminal (ex.: `http://localhost:3000`).

---

## 📁 Estrutura do projeto

```
Quotesapp/
├── index.html    # Página principal
├── style.css     # Tema, layout e animações
├── script.js     # APIs, fallback, copiar e compartilhar
└── README.md     # Documentação (este arquivo)
```

---

## 🧩 Tecnologias

- **HTML5** — estrutura e acessibilidade
- **CSS3** — custom properties, `prefers-color-scheme`, `backdrop-filter`, `@keyframes`
- **JavaScript (ES6+)** — `async/await`, `fetch`, Clipboard API, Web Share API

---

## 📸 Preview

Abra o app em produção: **[quotesapp-amber.vercel.app](https://quotesapp-amber.vercel.app/)**

> 💡 *Dica:* adicione uma captura de tela em `assets/preview.png` e descomente a linha abaixo no README.

<!--
![Preview do Quotes App](./assets/preview.png)
-->

---

## 👤 Autor

**Kevin Miranda**

Projeto desenvolvido no contexto dos estudos **Alura** — evoluído com foco em **design**, **confiabilidade** e **experiência do usuário**.

---

<div align="center">

**Se uma citação não inspirar hoje, clique de novo.** ☁️

[Abrir demo na Vercel](https://quotesapp-amber.vercel.app/) · Made with care · 2026

</div>
