const nombre = document.querySelector("#nombre_usuario_input");
const anoNac = document.querySelector("#anoNacimiento_usuario_input");
const pcontrasena = document.querySelector("#contrasena_usuario_input");
const scontrasena = document.querySelector("#confirmar_contrasena_input");
const boton = document.querySelector("#enviar_registro");

boton.addEventListener("click", agregarRegistro);

let registros = [];

function agregarRegistro() {

    
    const name  = nombre.value;
	const year =  anoNac.value;
	const password = pcontrasena.value;
	const cPassword = scontrasena.value;

    let persona = new datosPersonales (name, year, password, cPassword);
    console.log(persona);
    registros.push(persona);
    
    nombre.value  = "";
    anoNac.value = "";
    pcontrasena.value = "";
    scontrasena.value = "";
}

class datosPersonales{
    constructor(name, year, password, cPassword){
        this.name = name;
        this.year = year;
        this.password = password;
        this.cPassword = cPassword;
    }
}

/*function ValidarRegistrosUnicos(arreglo) {

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
*/

module.exports.registros = registros;
//module.exports.ValidarRegistrosUnicos = ValidarRegistrosUnicos;
module.exports.agregarRegistro = agregarRegistro;
