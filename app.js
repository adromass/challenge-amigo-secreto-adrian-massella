//crear un array
let listaNombres = [];

//implementar funcion para agregar amigo
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let nombre = document.getElementById('amigo').value;
    // Validar la entrada
    console.log(nombre);
    if (nombre === "") {
        alert('Por favor, inserte un nombre');
        return;
    // Actualizar el array de amigos    
    } else if (listaNombres.includes(nombre)) {
        // Verificar si el nombre ya existe en la lista
        alert('Ya existe este nombre dentro de la lista, inserte un nuevo nombre');
        document.getElementById('amigo').value = '';
        return;
    }
    else {
        listaNombres.push(nombre); 
        // Limpiar el campo de entrada
        console.log(listaNombres);
        document.getElementById('amigo').value = '';  
        //Limpiar el mensaje de "Amigo sorteado: nombre"
        document.getElementById('resultado').innerHTML = "";
    }
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y crear elementos de lista
    for (let i = 0; i < listaNombres.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaNombres[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (listaNombres.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    } else {
        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
        // Obtener el nombre sorteado
        let amigoSorteado = listaNombres[indiceAleatorio];
        // Mostrar el resultado
        document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
        // Limpiar la lista mostrada
        document.getElementById('listaAmigos').innerHTML = "";
        // Limpiar el array de nombres
        listaNombres = [];
    }
}