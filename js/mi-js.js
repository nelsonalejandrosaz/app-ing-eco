//(function(){
  // Variables
  var n=0.0;
  var i=0.0;
  var tipo=0;
  var resultado=0.0;
  var boton = document.getElementById("btnCalcular");
  // var divEr = document.createElement("div");
  // var strongEl = document.createElement("strong");
  // var mensaje = "";


  function obtenerDatos(){
    n = parseInt(document.getElementById("numero").value);
    i = parseFloat(document.getElementById("interes").value);
    i = i/100;
    tipo = parseInt(document.getElementById("tipo").value);

    while (n < 0) {
      // x = document.getElementById("numero");
      // x.setAttribute("placeholder","Ingrese un numero mayor a 0");
      // alert("Si llega aqui");
      mensaje = "Ingrese un numero mayor a 0";
      contenido = document.createTextNode(mensaje);
      divEr = document.getElementById('div-error');
      divEr.appendChild(contenido);
      divEr.classList.remove('hidden');
    }
  }

  function fp(){
    var res = Math.pow((1 + i),n) ;
    return res;
  }

  function pf(){
    var res = 1/Math.pow((1 + i),n) ;
    return res;
  }

  function ap(){
    var res = [i*(Math.pow((1 + i),n))]/[(Math.pow((1 + i),n)) - 1];
    return res;
  }

  function pa(){
    var res = [(Math.pow((1 + i),n)) - 1]/[i*(Math.pow((1 + i),n))];
    return res;
  }

  function af(){
    var res = i/[(Math.pow((1 + i),n)) - 1];
    return res;
  }

  function fa(){
    var res = [(Math.pow((1 + i),n)) - 1]/i;
    return res;
  }

  function ag(){
    var res = [(1/i)-(n/[(Math.pow((1 + i),n)) - 1])];
    return res;
  }

  function calcular(){
    obtenerDatos();
    switch (tipo) {
      case 1:
        resultado = fp();
        break;
      case 2:
        resultado = pf();
        break;
      case 3:
        resultado = ap();
        break;
      case 4:
        resultado = pa();
        break;
      case 5:
        resultado = af();
        break;
      case 6:
        resultado = fa();
        break;
      case 7:
        resultado = ag();
        break;
    }
    alert(resultado);
  }

  // Eventos

  boton.addEventListener("click",calcular);


//}())
