let listaCobrar = [
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
listarVehiculos()

function localStorag(){
    var datos = JSON.parse(localStorage.getItem('vehiculos'));
    if(datos === null){
        listaCobrar = [];
    }else{
        listaCobrar = datos;
    }
}

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
        data += `<td><button type="button" onclick="cargarInformacion(${i})" class="btn btn-primary btn-sm">Cobrar</button> </td>`
        data += "</tr>"
    }
    lista.innerHTML = data
}

function cobrar(){

}

localStorag()
listarVehiculos()
