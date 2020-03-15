let listaCobrar = [
    {
        placa: "854",
        ciudad: "Medellin",
        tipo: "Moto",
        color: "Negro",
        marca: "ss",
        fecha: "00",
        precio: 100,
        horaIngreso: "0"
    }
]
listarVehiculos()

/*
  metodo para guardar la informacion en el local storage
    y al refrescar la pagina no perder la informacion
*/
function localStorag() {
    var datos = JSON.parse(localStorage.getItem('vehiculos'));
    if (datos === null) {
        listaCobrar = [];
    } else {
        listaCobrar = datos;
    }
}

/*
    listamos los vehiculos que estan el el parquadero
*/
function listarVehiculos() {
    let lista = document.getElementById("listaVehiculosCobrar")
    let data = ""
    for (let i = 0; i < listaCobrar.length; i++) {
        let miVehiculo = listaCobrar[i];
        data += "<tr>"
        data += `<td>${miVehiculo.placa}</td>`
        data += `<td>${miVehiculo.ciudad} </td>`
        data += `<td>${miVehiculo.tipo}</td>`
        data += `<td>${miVehiculo.color} </td>`
        data += `<td>${miVehiculo.marca} </td>`
        data += `<td>${miVehiculo.fecha} </td>`
        data += `<td>${miVehiculo.hora} </td>`
        data += `<td><button type="button" onclick="cobrar('${miVehiculo.placa}')" class="btn btn-primary btn-sm">Dar salida</button> </td>`
        data += "</tr>"
    }
    lista.innerHTML = data;
}

/*
    pasando la placa como parametro del vehiculo al que le vamos a cobrar, recorremos el arreglo para 
    saber a que vehiculo le corresponde la placa para saber la fecha inicial, la hora y el valor por hora
    para luego hacer los calculos y tener el valor a cobrar
*/
function cobrar(index) {
    console.log(index)
    for (let i = 0; i < listaCobrar.length; i++) {
        if (listaCobrar[i].placa == index) {
            let valor = listaCobrar[i].precio;
            let horas = calcularTiempo(listaCobrar[i].fecha, listaCobrar[i].hora);
            let calcular = horas * valor;
            document.getElementById("cuenta").value = "El vehiculo estuvo en el parqueadero " + horas + " horas, el total a pagar es: " + calcular;
        }
    }
}

/* 
    recibimos como parametro la fecha incial y la hora, para luego hacer operaciones con la fecha actual 
    y la fecha inicial, las restamos y convertimos eso a horas y finalmente hacmeos una aproximacion
*/
function calcularTiempo(fecha, hora) {
    fecha = fecha.split("/");
    hora = hora.split(":");
    let fechaHoy = new Date().getTime();
    let fechaVieja = new Date(fecha[0], parseInt(fecha[1]) - 1, fecha[2], hora[0], hora[1]).getTime();
    let fechaFinal = Math.ceil((fechaHoy - fechaVieja) / (1000 * 3600));
    return fechaFinal;
}

localStorag()
listarVehiculos()
