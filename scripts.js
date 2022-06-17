txtPesoDado = document.getElementById("txt_pesoIngresado");
txtCalculado = document.getElementById("txt_pesoResultado");
selectPlaneta = document.getElementById("planetas");
var grabedadPlaneta = 9.8;


function Calcular() {
    var peso = txtPesoDado.value;
    var planeta = selectPlaneta.value;
    switch(planeta) {
        case "mercurio":
            grabedadPlaneta = 3.7;
        break;
        case "venus":
            grabedadPlaneta = 8.87;
        break;
        case "marte":
            grabedadPlaneta = 3.7;
        break;
        case "jupiter":
            grabedadPlaneta = 24.79;
        break;
        case "saturno":
            grabedadPlaneta = 10.44;
        break;
        case "urano":
            grabedadPlaneta = 8.87
        break;
        case "neptuno":
            grabedadPlaneta = 11.15;
        break;
        default:
            grabedadPlaneta = 9.8;
    }
    var calculo = (peso*grabedadPlaneta)/9.8;
    txtCalculado.value = calculo;
}

function limpiarCampos(){
    txtCalculado.value = "";
}
//alert("It's ready");