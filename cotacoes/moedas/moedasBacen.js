var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
    operacao()
    e.preventDefault();
});

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function operacao() {
    let retorno = fazGet(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json`)
    let moedas = JSON.parse(retorno)
    console.log(moedas.value)
    var podioPorPais = moedas.value.map(function(moeda){
        return `<tr>
                    <td>${moeda.simbolo}</td>
                    <td>${moeda.nomeFormatado}</td>
                </tr>`;
    });
     
    document.querySelector("#tbPodio tbody").innerHTML = podioPorPais.join("");
}