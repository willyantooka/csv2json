# CSV2JSON

Conversor entre CSV e JSON feito com HTML, CSS e JavaScript puro, sem bibliotecas de conversão.

🔗 **[Ver online](https://willyantooka.github.io/csv2json/)**

## O que faz

- Converte **CSV em JSON**: a primeira linha vira as chaves e cada linha seguinte vira um objeto
- Converte **JSON em CSV**: as chaves do primeiro objeto viram o cabeçalho e cada objeto vira uma linha
- Mostra avisos na tela quando algo está errado
- Limpa as caixas de texto e o aviso com um clique
- Abre arquivos `.csv` e `.json` do computador e coloca o conteúdo na caixa de texto
- Salva o conteúdo das caixas como arquivo, com o nome escolhido pelo usuário (ou um nome padrão)

## Validações

**Ao converter CSV para JSON:**
- Avisa se a caixa de CSV está vazia
- Avisa qual linha está errada quando o número de colunas é diferente do cabeçalho
- Ignora linhas em branco no final do texto

**Ao converter JSON para CSV:**
- Avisa se a caixa de JSON está vazia
- Avisa se o texto não é um JSON válido
- Avisa se o JSON não é uma lista com pelo menos um item

**Ao abrir e salvar arquivos:**
- Avisa se nenhum arquivo foi selecionado ou se a leitura falhou
- Avisa se a caixa está vazia na hora de salvar ou se o salvamento falhar

## Decisão sobre o bônus de arquivos

O desafio original pede para digitar o caminho do arquivo no sistema de arquivos. Os navegadores não permitem isso por segurança, então usei:

- **Abrir:** um seletor de arquivos com `FileReader`
- **Salvar:** um download gerado com `Blob`

## Limitações conhecidas

- JSON aninhado (objeto dentro de objeto) não é suportado, como previsto no desafio
- Valores com vírgula dentro (como `Curitiba, PR`) quebram o CSV, porque a vírgula separa as colunas
- Todos os valores do JSON gerado ficam como texto (`"20"`, e não `20`)

## Tecnologias

- HTML
- CSS
- JavaScript (sem bibliotecas)

## O que pratiquei neste projeto

- Quebrar texto com `split` e montar objetos a partir de listas
- Percorrer listas com `for`, inclusive um laço dentro de outro
- Converter com `JSON.parse` e `JSON.stringify`, usando `try` e `catch` para erros
- Usar `Object.keys`, `Object.values` e `join`
- Ler arquivos com `FileReader`
- Gerar downloads com `Blob`
- Separar o projeto em `index.html`, `style.css` e `script.js`

## Como rodar

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` no navegador

## Autor

Feito por Willyan como parte do meu aprendizado em desenvolvimento web.
