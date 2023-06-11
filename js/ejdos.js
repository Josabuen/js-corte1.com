function calcularMonto() {

    let montoInicial = document.getElementById('inicial').value;
    //let montoInicial = prompt("Ingrese el monto inicial de la cuenta de ahorro:");

    if (isNaN(montoInicial)) {
        alert("Por favor ingrese un monto válido");
    } else {
        let saldo = parseFloat(montoInicial);
        let tasaInteresMensual = 0.0125;
        let depositoMensual = 250;
    
        for (let i = 0; i < 12; i++) {
            saldo += saldo * tasaInteresMensual;
            saldo += depositoMensual;
        }
    
        var output5 = '';
        output5 = `<br>
        El saldo de la cuenta al final del año es: ${saldo.toFixed(2)} Bs
        <br>
        <br>
        `;

        document.getElementById("respuesta").innerHTML = output5;
        //alert(`El saldo de la cuenta al final del año es: ${saldo.toFixed(2)} Bs`);
    } 
}