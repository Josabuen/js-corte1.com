let estudiantes = [];

function agregarEstudiante(nombre, peso) {
    if (nombre === "" || peso === "") {
        alert("Por favor ingrese un nombre y un peso válido.");
        return;
    }
    if (isNaN(peso)) {
        alert("Por favor ingrese un peso válido en Kg.");
        return;
    }
    estudiantes.push({nombre: nombre, peso: peso});
    
}

function mostrarTabla() {
    
    let menosDe40 = estudiantes.filter(estudiante => estudiante.peso < 40);
    let entre40y50 = estudiantes.filter(estudiante => estudiante.peso >= 40 && estudiante.peso < 50);
    let entre50y60 = estudiantes.filter(estudiante => estudiante.peso >= 50 && estudiante.peso < 60);
    let masOigual60 = estudiantes.filter(estudiante => estudiante.peso >= 60);


    var output1 = '';
    output1 += `
        <tr>
            <td>
            ${menosDe40.length}
            </td>
            <td>
            ${entre40y50.length}
            </td>
            <td>
            ${entre50y60.length}
            </td>
            <td>
            ${masOigual60.length}
            </td>
        </tr>
    `;
    
    document.getElementById("tbody1").innerHTML = output1;
    
    var output2 = '';
    for(var i in estudiantes) {
        output2 += `
        <tr>
            <td>
            ${estudiantes[i].nombre}
            </td>
            <td>
            ${estudiantes[i].peso}
            </td>
        </tr>
        `;
    }
    
    document.getElementById("tbody2").innerHTML = output2;

}

function solicitarDatos() {

    let numEstudiantes = prompt("¿Cuántos estudiantes desea registrar?");
    if (isNaN(numEstudiantes)) {
        alert("Por favor ingrese un numero valido");
        return;
    }

    for (let i = 0; i < numEstudiantes; i++) {
        let nombre = prompt("Ingrese el nombre del estudiante:");
        let peso = prompt("Ingrese el peso del estudiante en Kg:");
        agregarEstudiante(nombre, peso);
    }
    console.log(estudiantes);

    mostrarTabla();

}