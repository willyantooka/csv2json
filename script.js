function converterParaJson(){
    const csv = document.getElementById("csv").value;
    const linhas = csv.trim().split("\n");
    if (csv.trim() === ""){
        document.getElementById("aviso").textContent = "O CSV está vazio.";
        return;
    }
    document.getElementById("aviso").textContent = "";
    const cabecalho = linhas[0].split(",");
    const resultado = [];

    for (let i = 1;i < linhas.length; i++){
        const colunas = linhas[i].split(",");
        if (colunas.length !== cabecalho.length){
            document.getElementById("aviso").textContent = "Esta linha esta errada: " + linhas[i];
            document.getElementById("json").value = "";
            return;
        }
        const pessoa = {};
        for (let j = 0; j < cabecalho.length; j++){
            pessoa[cabecalho[j]] = colunas[j];
        }
        resultado.push(pessoa)
    }
    document.getElementById("json").value = JSON.stringify(resultado, null, 2)
}

function limpar(){
    document.getElementById("csv").value = "";
    document.getElementById("json").value = "";
    document.getElementById("aviso").textContent = "";
}

function converterParaCsv(){
    const json = document.getElementById("json").value;
    if (json.trim() === ""){
        document.getElementById("aviso").textContent = "O JSON esta vazio.";
        document.getElementById("csv").value = ""
        return;
    }
    document.getElementById("aviso").textContent = "";

    let dados;
    try {
        dados = JSON.parse(json);
    } catch {
        document.getElementById("aviso").textContent = "JSON inválido."
        document.getElementById("csv").value = "";
        return;
    }
    if (!Array.isArray(dados) || dados.length === 0 ){
        document.getElementById("aviso").textContent = "O JSON precisa ser uma lista com pelo menos um item.";
        document.getElementById("csv").value = "";
        return;
    }
    
    const linhasCsv = [];
    const cabecalho = Object.keys(dados[0]).join(",");
    linhasCsv.push(cabecalho);
    for (let i = 0; i < dados.length; i++){
        const l = Object.values(dados[i]).join(",");
        linhasCsv.push(l);
    }
    const textoCsv = linhasCsv.join("\n");
    document.getElementById("csv").value = textoCsv;
}

function abrirCsv(){
    const arquivo = document.getElementById("arquivoCsv").files[0]
    document.getElementById("aviso").textContent = "";
    if (arquivo === undefined){
        document.getElementById("aviso").textContent = "Nenhum arquivo selecionado.";
        return;
    }
    const leitor = new FileReader();
    leitor.onload = function(){
        document.getElementById("csv").value = leitor.result;
    }
    leitor.onerror = function(){
        document.getElementById("aviso").textContent = "Não foi possível ler o arquivo.";
    }
    leitor.readAsText(arquivo);
}

function salvarCsv(){
    const textoCsv = document.getElementById("csv").value.trim();
    document.getElementById("aviso").textContent = "";
    if (textoCsv === ""){
        document.getElementById("aviso").textContent = "O CSV está vazio, não tem o que salvar.";
        return;
    }
    let nomeCsv = document.getElementById("nomeCsv").value.trim();
    if (nomeCsv === ""){
        nomeCsv = "dados.csv";
    }
    try{
        const blob = new Blob([textoCsv], {type: "text/csv"});
        const endereco = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = endereco;
        link.download = nomeCsv;
        link.click();
        URL.revokeObjectURL(endereco);
    } catch{
        document.getElementById("aviso").textContent = "Não foi possível salvar o arquivo CSV."
    }
}

function abrirJson() {
    const arquivoJson = document.getElementById("arquivoJson").files[0]
    document.getElementById("aviso").textContent = "";
    if (arquivoJson === undefined){
        document.getElementById("aviso").textContent = "Nenhum arquivo selecionado.";
        return;
    }
    const leitor = new FileReader();
    leitor.onload = function(){
        document.getElementById("json").value = leitor.result;
    }
    leitor.onerror = function(){
        document.getElementById("aviso").textContent = "Não foi possível ler o arquivo.";
    }
    leitor.readAsText(arquivoJson);
}

function salvarJson(){
    const textoJson = document.getElementById("json").value.trim();
    document.getElementById("aviso").textContent = "";
    if (textoJson === ""){
        document.getElementById("aviso").textContent = "O JSON está vazio, não tem o que salvar.";
        return;
    }
    let nomeJson = document.getElementById("nomeJson").value.trim();
    if (nomeJson === ""){
        nomeJson = "dados.json";
    }
    try{
        const blob = new Blob([textoJson], {type: "application/json"});
        const endereco = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = endereco;
        link.download = nomeJson;
        link.click();
        URL.revokeObjectURL(endereco);
    } catch{
        document.getElementById("aviso").textContent = "Não foi possível salvar o arquivo JSON."
    }
}