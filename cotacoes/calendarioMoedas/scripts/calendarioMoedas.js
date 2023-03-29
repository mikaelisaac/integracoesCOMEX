var date = new Date();
console.log(date.getMonth());
var firstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);

/*console.log(firstDay);
console.log(lastDay);*/

lastDay = lastDay.getDate()
firstDay = firstDay.getDate();

for(let i= firstDay; i < lastDay + 1; i++){
    let data  = date.getMonth() + 1 + "-" + i + "-" + date.getFullYear();
    /*console.log(data);*/
    
    document.querySelector("#tabelaCalendario tbody").innerHTML +=
    `<tr>
        <td id="${i}">${i} ${operacao(data)}</td>
    </tr>`;
}

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function operacao(dataDigitada) {
    let retorno = fazGet(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dataDigitada}'&$top=100&$format=json`)

    let valores = JSON.parse(retorno)
    if (valores.value.length !== 0) {
        let cotacaoDeCompra = valores.value[0].cotacaoCompra
        let cotacaoDeVenda = valores.value[0].cotacaoVenda
        let msg = `-> Compra: ${cotacaoDeCompra} | Venda: ${cotacaoDeVenda}`
        return msg;
    } else {
        return "";
    }
}