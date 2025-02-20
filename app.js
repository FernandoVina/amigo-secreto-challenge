// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//definicion de variables
let nombreUsuario = prompt('Digite su Nombre');
    console.log(nombreUsuario);
let nombreIngresado = prompt('Digite el Nombre de un Amigo');
    console.log(nombreIngresado);
    //hasta el momento solo se almacena 1 en la consola
let amigoSorteado = prompt('Digite Amigo Secreto');
    console.log(amigoSorteado);

if (nombreUsuario == amigoSorteado){
    //comparo nombre del usuario con el nombre sorteado, no pueden ser iguales
    alert('Nombre Usuario No Puede Ser Su Amigo Secreto');
}
