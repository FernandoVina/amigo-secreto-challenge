// definicion de variables
let amigo = [];

function agregarAmigo() {
    let imputAmigo = document.getElementById('amigo');
    let nombreAmigo = imputAmigo.value;

    if (!nombreAmigo) { 
        alert('Debes ingresar el nombre de un amigo');
        return;
        }

    amigo.push(nombreAmigo);
    imputAmigo.value = '';  //limpiar el input
    imputAmigo.focus(); //devolver el foco al input
    renderizarAmigos();
    }   
    function renderizarAmigos() {
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';

        for (let i = 0; i < amigo.length; i++) {
            let item = document.createElement('li');
            li.textContent = amigo[i];
            listaAmigos.appendChild(item);
        }
    }
    function sortearAmigo() {
           if (amigo.length === 0) {
            alert('No hay amigos para sortear');
            return;
            } 
            let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
            {
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;
            let limpiarLista = document.getElementById('listaAmigos');
            limpiarLista.innerHTML = '';
            }
    }