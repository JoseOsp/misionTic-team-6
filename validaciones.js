let nombre = document.querySelector("nombre_usuario_input");
let anoNac = document.querySelector("anoNacimiento_usuario_input");
let pcontrasena = document.querySelector("contrasena_usuario_input");
let scontrasena = document.querySelector("confirmar_contrasena_input");
const boton = document.getElementById("enviar_registro");

boton.addEventListener("click", agregarRegistro);

let registros = [];

function agregarRegistro() {

    
    let name  = nombre.value;
	let year =  anoNac.value;
	let password = pcontrasena.value;
	let cPassword = scontrasena.value;

    let persona = new datosPersonales (name, year, password, cPassword);
    console.log(persona);
    registros.push(persona);
}

class datosPersonales{
    constructor(name, year, password, cPassword){
        this.name = name;
        this.year = year;
        this.password = password;
        this.cPassword = cPassword;
    }
}

function ValidarRegistrosUnicos(arreglo) {

    const len = registros.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
            // if the elements match, this wouldn't be a unique array
            if (i !== j && registros[i] === registros[j]) {
              return false;
            }
          }
        }
        return true;
}


module.exports.registros = registros;
module.exports.ValidarRegistrosUnicos = ValidarRegistrosUnicos;
module.exports.agregarRegistro = agregarRegistro;
