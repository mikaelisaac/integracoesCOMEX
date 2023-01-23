var form = document.getElementById('formulario');
var campoDtIni = document.getElementById('dtInicial');
var campoDtFim = document.getElementById('dtFinal');

form.addEventListener('submit', function(e) {
    let ano = campoDtIni.value.split("-")[0];
    let mes = campoDtIni.value.split("-")[1];
    let dia = campoDtIni.value.split("-")[2];
    let dataIni  = mes + "-" + dia + "-" + ano;

    ano = campoDtFim.value.split("-")[0];
    mes = campoDtFim.value.split("-")[1];
    dia = campoDtFim.value.split("-")[2];

    let dataFim  = mes + "-" + dia + "-" + ano;
    operacao(dataIni, dataFim)
    e.preventDefault();
});

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function operacao(dataDigitadaInicial, dataDigitadaFinal) {
    let retorno = fazGet(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${dataDigitadaInicial}'&@dataFinalCotacao='${dataDigitadaFinal}'&$top=1000&$format=json`)
    let valores = JSON.parse(retorno)
    console.log(valores.value)
    var podioPorPais = valores.value.map(function(cotacao){
        return `<tr>
                    <td>${cotacao.cotacaoCompra}</td>
                    <td>${cotacao.cotacaoVenda}</td>
                    <td>${cotacao.dataHoraCotacao}</td>
                </tr>`;
    });
     
    document.querySelector("#tbPodio tbody").innerHTML = podioPorPais.join("");
}