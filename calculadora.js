window.onload = function () {
  let signos = "+-*/";
  let x = new Array();
  document.getElementById("valor").onkeypress = function (e) {
    return numeros(e);
  };
  x = document.querySelectorAll("input[type=button]");
  for (let i = 0; i < x.length; i++) {
    x[i].onclick = function () {
      let n = this.value;
      if (n == "C") {
        borrar();
      } else if (n == "<") {
        borrarCaracter();
      } else if (n == "=") {
        calcular();
      } else if (signos.indexOf(n) > -1) {
        validarSigno(n);
      } else {
        regresar(n);
      }
    };
  }
};
/* Funciones */
function numeros(e) {
  let tecla = e.keyCode;
  let teclado = String.fromCharCode(tecla); //regresa la tecla escrita
  let especiales = new Array();
  especiales["backspace"] = 8;
  especiales["izquierda"] = 37;
  especiales["derecha"] = 39;
  let bandera = false;
  let numeros = "0123456789.";
  //
  bandera = especiales.includes(tecla);
  //
  if (numeros.indexOf(teclado) == -1 && bandera == false) {
    return false;
  }
}
function borrar() {
  document.form.valor.value = "";
}

function borrarCaracter() {
  let anterior = document.form.valor.value;
  let nuevo = anterior.substring(0, anterior.length - 1);
  document.getElementById("valor").value = nuevo;
}

function calcular() {
  let resultado = eval(document.form.valor.value);
  if (resultado == "Infinity") {
    document.form.valor.value = "No se puede dividir entre cero";
  } else {
    document.form.valor.value = resultado;
  }
}
function validarSigno(n) {
  let anterior = document.form.valor.value;
  if (anterior != "") {
    document.getElementById("valor").value = anterior + n;
    cadena = document.getElementById("valor").value;

    let record = 0;
    let igual = 1;

    for (let a = 1; a < cadena.length; a++) {
      if (
        cadena.charAt(a) == "+" ||
        cadena.charAt(a) == "-" ||
        cadena.charAt(a) == "*" ||
        cadena.charAt(a) == "/"
      ) {
        igual++;
      } else {
        if (igual > record) {
          record = igual;
        } else {
          igual = 1;
        }
      }
      if (igual > record) {
        record = igual;
      }
      if (record > 2) {
        let numero = cadena.substring(0, cadena.length - 1);
        document.getElementById("valor").value = numero;
        record = 0;
        igual = 1;
      }
    }
  }
}

function regresar(n) {
  let anterior = document.form.valor.value;
  let nuevo = anterior + n;
  document.getElementById("valor").value = nuevo;
}
