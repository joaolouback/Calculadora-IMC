function calcularIMC() {
    var altura = (document.getElementById('altura').value) / 100
    var peso = document.getElementById('peso').value

    var imc = peso / altura ** 2

    if(imc < 18.5)
    {
        alert('voce está magro')
    }
    else if (imc < 24.9)
    {
        alert('voce esta normal')
    }
    else if (imc < 29.9)
    {
        alert('voce esta com sobrepeso')
    }
    else if (imc < 39.9)
    {
        alert('voce esta com obesidade')
    }
    else if (imc > 39.9)
    {
        alert('voce esta com obesidade morbita')
    }

}