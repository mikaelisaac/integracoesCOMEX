var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
    let ano = campo.value.split("-")[0];
    let mes = campo.value.split("-")[1];
    let dia = campo.value.split("-")[2];
    let data  = mes + "-" + dia + "-" + ano;
    operacao(data)
    e.preventDefault();
});

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function operacao(dataDigitada) {
    let retorno = fazGet(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dataDigitada}'&$top=100&$format=json`)
    let valores = JSON.parse(retorno)
    let cotacaoDeCompra = valores.value[0].cotacaoCompra
    let cotacaoDeVenda = valores.value[0].cotacaoVenda
    let msg = `Dia: ${dataDigitada} | Cotação de compra: ${cotacaoDeCompra} | Cotação de venda: ${cotacaoDeVenda}`
    alert(msg)
}