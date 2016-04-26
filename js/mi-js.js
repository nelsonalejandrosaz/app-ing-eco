//(function(){
  // Variables
  var n=0.0, i=0.0, tipo=0, resultado=0.0, cont=0, contEr=0;
  var boton = document.getElementById("btnCalcular"),
      entradai = document.getElementById("interes"),
      entradan = document.getElementById("numero");
  // var divEr = document.createElement("div");
  // var strongEl = document.createElement("strong");
  // var mensaje = "";


  function obtenerDatos(){
    n = parseInt(document.getElementById("numero").value);
    i = parseFloat(document.getElementById("interes").value);
    i = i/100;
    tipo = parseInt(document.getElementById("tipo").value);

    if (n <= 0) {
      tipo = 8;
    }
    if (i <= 0) {
      tipo = 9;
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
      case 8:
        if (contEr > 0) {
          divEr.removeChild(contenido);
        }else if (contEr == 0) {
          divEr = document.getElementById('div-error');
        }
        mensaje = "Ingrese un n mayor a 0";
        contenido = document.createTextNode(mensaje);
        divEr.appendChild(contenido);
        divEr.classList.remove('hidden');
        resultado = 0;
        contEr++;
        break;
      case 9:
        if (contEr > 0) {
          divEr.removeChild(contenido);
        }else if (contEr == 0) {
          divEr = document.getElementById('div-error');
        }
        mensaje = "Ingrese un interes mayor a 0";
        contenido = document.createTextNode(mensaje);
        divEr.appendChild(contenido);
        divEr.classList.remove('hidden');
        resultado = 0;
        contEr++;
        break;
    }
    if (cont > 0) {
      divRes.removeChild(contenidoRes);
    }else if (cont == 0) {
      divRes = document.getElementById('div-respuesta');
    }
    cont++;
    contenidoRes = document.createTextNode(resultado.toFixed(5));
    divRes.appendChild(contenidoRes);
    divRes.classList.remove('hidden')
  }

  function removerMenErr(){
    if (contEr > 0) {
      divEr.classList.add('hidden');
    }
  }

  // Eventos

  boton.addEventListener("click",calcular);
  entradai.addEventListener("click",removerMenErr);
  entradan.addEventListener("click",removerMenErr);


//}())
