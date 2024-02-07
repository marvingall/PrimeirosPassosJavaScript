var CSV = "marvin marcelo,24,true,20.99,12/30/1990";

function dataDoCsvBr(csvString){
var Valores_Incorretos = csvString.split(",");


var dataComValorIncorretos =  Valores_Incorretos[4];

var dataSeparadoPeloTraco = dataComValorIncorretos.split("/");

var dia = dataSeparadoPeloTraco[1];
var mes = dataSeparadoPeloTraco[0];
var ano = dataSeparadoPeloTraco[2];

var dataComValorCorreto=  '${dia}/${mes}/${ano}'; // ou dia + "/" + mes + "/" + ano;

var  NOVO_CSV=  Valores_Incorretos.join(",");
return NOVO_CSV;
}
var CSV_COM_DATA_CORRETA = dataDoCsvBr(CSV);

console.log(CSV_COM_DATA_CORRETA);

const name = 'j';
