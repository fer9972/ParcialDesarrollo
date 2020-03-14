

let vehiculos = [
    {
        placa: "854",
        ciudad: "Medellin",
        tipo: "Moto",
        color: "Negro",
        marca: "ss",
        fechaIngreso: "00",
        precio: 100,
        horaIngreso:"0"
    }
]

let vehiculoTemporal = null

function obtenerValores() {
    let placa = document.getElementById("id").value
    let ciudad = document.getElementById("ciudadPlaca").value
    let tipo = document.getElementById("tipo").value
    let color = document.getElementById("color").value
    let marca = document.getElementById("marca").value
    let fecha = document.getElementById("fecha").value
    let hora = document.getElementById("hora").value


    if (tipo === "carro") {
        let precio = 8000
        let vehiculo = { placa, ciudad, tipo, color, marca, fecha, precio, hora }
        precio = 0
        return vehiculo
        console.log(miEstudiante)
    } else if (tipo === "moto") {
        let precio = 4000
        let vehiculo = { placa, ciudad, tipo, color, marca, fecha, precio, hora }
        precio = 0
        return vehiculo
    } else if (tipo === "bicicleta") {
        let precio = 2000
        let vehiculo = { placa, ciudad, tipo, color, marca, fecha, precio, hora }
        precio = 0
        return vehiculo
    } else {
        let precio = 21000
        let vehiculo = { placa, ciudad, tipo, color, marca, fecha, precio, hora }
        precio = 0
        return vehiculo
    }
}

function crearVehiculo() {
    let vehiculo = obtenerValores()
    console.log(vehiculo);
    let existeVehiculo = vehiculos.find(x => vehiculo.placa === x.placa)
    if (existeVehiculo) {
        alert("El vehiculo ya esta registrado")
        return;
    }
    vehiculos.push(vehiculo)
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
    listarVehiculos()
    limpiarFormulario()
    
}

function listarVehiculos() {
    let lista = document.getElementById("listaVehiculos")
    let data = ""
    for (let i = 0; i < vehiculos.length; i++) {
        let miVehiculo = vehiculos[i];
        data += "<tr>"
        data += `<td>${miVehiculo.placa}</td>`
        data += `<td>${miVehiculo.ciudad} </td>`
        data += `<td>${miVehiculo.tipo}</td>`
        data += `<td>${miVehiculo.color} </td>`
        data += `<td>${miVehiculo.marca} </td>`
        data += `<td>${miVehiculo.fecha} </td>`
        data += `<td>${miVehiculo.hora} </td>`
        data += `<td><button type="button" onclick="cargarInformacion(${i})" class="btn btn-primary btn-sm">Editar</button> </td>`
        data += '<td><button type="button" onclick="eliminarVehiculo(' + i + ')" class="btn btn-primary btn-sm">Eliminar</button> </td>'
        data += "</tr>"
    }
    lista.innerHTML = data
}

function limpiarFormulario() {

    document.getElementById("id").value = ""
    document.getElementById("ciudadPlaca").value = ""
    document.getElementById("tipo").value = "Seleccione un tipo"
    document.getElementById("color").value = ""
    document.getElementById("marca").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("hora").value = ""


    document.getElementById("btnCrear").style.display = "inline"
    document.getElementById("btnEditar").style.display = "none"
}

function eliminarVehiculo(index) {
    vehiculos.splice(index, 1)
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
    listarVehiculos()
}

function cargarInformacion(index) {
    let vehiculo = vehiculos[index]
    vehiculoTemporal = index
    document.getElementById("id").value = vehiculo.placa
    document.getElementById("ciudadPlaca").value = vehiculo.ciudad
    document.getElementById("tipo").value = vehiculo.tipo
    document.getElementById("color").value = vehiculo.color
    document.getElementById("marca").value = vehiculo.marca
    document.getElementById("fecha").value = vehiculo.fecha
    document.getElementById("hora").value = vehiculo.hora

    document.getElementById("btnCrear").style.display = "none"
    document.getElementById("btnEditar").style.display = "inline"
}

function actualizarVehiculo() {
    let vehiculoActualizado = obtenerValores()
    vehiculos.splice(vehiculoTemporal, 1, vehiculoActualizado)
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
    listarVehiculos(limpiarFormulario)
}

function localStorag(){
    var datos = JSON.parse(localStorage.getItem('vehiculos'));
    if(datos === null){
        vehiculos = [];
    }else{
        vehiculos = datos;
    }
}
localStorag()
listarVehiculos()


