//-- Variáveis --
let moeda = 0
let contadorMes = 0;
let dataHoje = new Date();
let corpo = document.getElementById("tabelaCorpo")
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let linha;
let dtAux;

//-- Operações --
do{
    //console.log(meses[contadorMes]);
    //console.log(`O mês atual é ${meses[dataHoje.getMonth()]}`);
    //console.log(`O último dia do mês é: ${fInicioMes(dataHoje)}`);
    //console.log(`O último dia do mês é: ${fFimMes(dataHoje)}`);
    if (dataHoje.getMonth() == contadorMes){
        let dtAux = fInicioMes(dataHoje).getDate();
        let dtFim = fFimMes(dataHoje).getDate();

        do{
            /*buscaCotacao();*/
            dtAux++
        } while (dtAux < (dtFim + 1));
    }

    /*if (dtAux.getDay() == 6) {
        

    }*/
    corpo.innerHTML = linha;

    contadorMes++;
} while (contadorMes < 12);

//-- Functions --
function fInicioMes(data){
    let primeiroDiaMes = new Date(data.getFullYear(), data.getMonth(), 1);
    return primeiroDiaMes;
}

function fFimMes(data){
    let ultimoDiaMes = new Date(data.getFullYear(), data.getMonth()+1, 0);
    return ultimoDiaMes;
}

/*function buscaCotacao(data,moeda){
    fazGet()
    // Pega o retorno e trata o valor para que 
    console.log(`A cotação do dólar para o dia ${dtAux} é de:`);
}

function fazGet(data){
    return valorCotacao
}*/
