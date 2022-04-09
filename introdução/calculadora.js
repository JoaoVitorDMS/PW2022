function somar(){
    var valor1 = document.getElementById("valor1");
    var valor2 = document.getElementById("valor2");
    var valorConvert = parseFloat(valor1.value);
    var valorConvert2 = parseFloat(valor2.value);

    if(valor1.value == "" || valor2.value == "")
    {
        // alert("Campo vazio");
        document.getElementById("resultado").innerHTML = "Preencher os campos";
    }
    else
    {
        var resultado = valorConvert + valorConvert2;
        // alert(resultado);
        document.getElementById("resultado").innerHTML = "Resultado: "  + resultado;
        valor1.value = "";
        valor2.value = "";

    }
}

function limpar() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function esconderMostrar()
{
    var esconderCalcu = document.getElementById("section1").style.display;

    if(esconderCalcu == "none")
    {
        document.getElementById("section1").style.display="block";
    }
    else
    {
        document.getElementById("section1").style.display = "none";
    }
}