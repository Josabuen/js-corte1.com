let estudiantes2 = [];

function agregarEstudiante2() {
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var mat = document.getElementById("mat").value;
    var fis = document.getElementById("fis").value;
    var prog = document.getElementById("prog").value;

    if (isNaN(cedula)) {
        alert("Error: Cedula debe ser un numero");
        return;
    }
    if (isNaN(mat) || isNaN(fis) || isNaN(prog)) {
        alert("Error: Las notas deben ser números.");
        return;
    }
    if (mat < 0 || mat > 20 || fis < 0 || fis > 20 || prog < 0 || prog > 20) {
        alert("Error: Las notas deben estar entre 0 y 20.");
        return;
    }
    let estudiantee = {
        id: cedula,
        nombre: nombre,
        notaMatematicas: mat,
        notaFisica: fis,
        notaProgramacion: prog
    };
    estudiantes2.push(estudiantee);
    
    calcularPromedios();
    calcularEstadisticas();

    document.getElementById("cedula").value = '';
    document.getElementById("nombre").value = '';
    document.getElementById("mat").value = ''; 
    document.getElementById("fis").value = ''; 
    document.getElementById("prog").value = '';

}

function calcularPromedios() {

    var sumaMatematicas = 0;
    var sumaFisica = 0;
    var sumaProgramacion = 0;
  

    for (let i = 0; i < estudiantes2.length; i++) {
        sumaMatematicas += parseFloat(estudiantes2[i].notaMatematicas);
        sumaFisica += parseFloat(estudiantes2[i].notaFisica);
        sumaProgramacion += parseFloat(estudiantes2[i].notaProgramacion);
    }
    var promedioMatematicas = parseFloat(sumaMatematicas) / (estudiantes2.length);
    var promedioFisica = parseFloat(sumaFisica) / (estudiantes2.length);
    var promedioProgramacion = parseFloat(sumaProgramacion) / (estudiantes2.length);

    var output3 = '';
    output3 = `<br>
    Promedio de matemáticas: ${promedioMatematicas.toFixed(2)}<br>
    Promedio de física: ${promedioFisica.toFixed(2)}<br>
    Promedio de programación: ${promedioProgramacion.toFixed(2)}<br>
    <br>
    `;

    document.getElementById("promedios").innerHTML = output3;

    promedioMatematicas = 0;
    promedioFisica = 0;
    promedioProgramacion = 0;
    sumaMatematicas = 0;
    sumaFisica = 0;
    sumaProgramacion = 0;

}

function calcularEstadisticas() {
    let matematicasAprobadas = 0;
    let matematicasReprobadas = 0;
    let fisicaAprobadas = 0;
    let fisicaReprobadas = 0;
    let programacionAprobadas = 0;
    let programacionReprobadas = 0;
    let todosAprobados = 0;
    let unoAprobado = 0;
    let dosAprobados = 0;
    let maximoMatematicas = 0;
    let maximoFisica = 0;
    let maximoProgramacion = 0;
    for (let i = 0; i < estudiantes2.length; i++) {
        if (estudiantes2[i].notaMatematicas >= 10) {
            matematicasAprobadas++;
        }else if(estudiantes2[i].notaMatematicas < 10){
            matematicasReprobadas++;
        }
        if (estudiantes2[i].notaFisica >= 10) {
            fisicaAprobadas++;
        }else if(estudiantes2[i].notaFisica < 10){
            fisicaReprobadas++;
        }
        if (estudiantes2[i].notaProgramacion >= 10) {
            programacionAprobadas++;
        }else if(estudiantes2[i].notaProgramacion < 10){
            programacionReprobadas++;
        }
        if (estudiantes2[i].notaMatematicas >= 10 && estudiantes2[i].notaFisica >= 10 && estudiantes2[i].notaProgramacion >= 10) {
            todosAprobados++;
        } else if (estudiantes2[i].notaMatematicas >= 10 || estudiantes2[i].notaFisica >= 10 || estudiantes2[i].notaProgramacion >= 10) {
            unoAprobado++;
        } else if ((estudiantes2[i].notaMatematicas >= 10 && estudiantes2[i].notaFisica >= 10) || (estudiantes2[i].notaMatematicas >= 10 && estudiantes2[i].notaProgramacion >= 10) || (estudiantes2[i].notaFisica >= 10 && estudiantes2[i].notaProgramacion >= 10)) {
            dosAprobados++;
        }
        if (estudiantes2[i].notaMatematicas > maximoMatematicas) {
            maximoMatematicas = estudiantes2[i].notaMatematicas;
        }
        if (estudiantes2[i].notaFisica > maximoFisica) {
            maximoFisica = estudiantes2[i].notaFisica;
        }
        if (estudiantes2[i].notaProgramacion > maximoProgramacion) {
            maximoProgramacion = estudiantes2[i].notaProgramacion;
        }
    }


    var output4 = '';
    output4 = `<br>
    Matemáticas aprobadas: ${matematicasAprobadas} <br>
    Matemáticas reprobadas: ${matematicasReprobadas}<br>
    Física aprobada: ${fisicaAprobadas}<br>
    Física reprobada: ${fisicaReprobadas}<br>
    Programación aprobada: ${programacionAprobadas}<br>
    Programación reprobada: ${programacionReprobadas}<br>
    Todos aprobados: ${todosAprobados}<br>
    Uno aprobado: ${unoAprobado}<br>
    Dos aprobados: ${dosAprobados}<br>
    Máximo de matemáticas: ${maximoMatematicas}<br>
    Máximo de física: ${maximoFisica} <br>
    Máximo de programación: ${maximoProgramacion}<br><br>
    
    `;
    document.getElementById("estadisticas").innerHTML = output4;

}

