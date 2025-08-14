<html>
<head>
    <title>Calculadora Simples</title>
</head>
<body>
<script>
    let x = prompt("Escolha a operação: (s) soma, (su) subtração, (m) multiplicação, (d) divisão");
    let n1 = parseFloat(prompt("Entre com o primeiro número"));
    let n2 = parseFloat(prompt("Entre com o segundo número"));
    let resultado;

    if (x == "s") resultado = n1 + n2;
    else if (x == "su") resultado = n1 - n2;
    else if (x == "m") resultado = n1 * n2;
    else if (x == "d") resultado = n1 / n2;
    else resultado = "Operação inválida";

    alert("O resultado é: " + resultado);
</script>
</body>
</html>