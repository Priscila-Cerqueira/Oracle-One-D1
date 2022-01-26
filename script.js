

function cripto(){

    var texto = document.getElementById('quadroCod').value;
    var textoTemporario = '';

    for (var i = 0; i < texto.length; i++) {
      if(texto[i] == 'a'){
        textoTemporario+='ai';
      }else if(texto[i] == 'e'){
        textoTemporario+='enter';
      }else if(texto[i] == 'i'){
        textoTemporario+='imes';
      }else if(texto[i] == 'o'){
        textoTemporario+='ober';
      }else if(texto[i] == 'u'){
        textoTemporario+='ufat';
      }else{
        textoTemporario+=texto[i];
      }
    }
    document.getElementById('quadroCod').value = '';
    document.getElementById('quadroDecod').value = textoTemporario;
}

function descripto(){

    var texto = document.getElementById('quadroDecod').value;
    texto = texto.replaceAll('ai', 'a');
    texto = texto.replaceAll('enter', 'e');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('ufat', 'u');

    document.getElementById('quadroDecod').value = '';
    document.getElementById('quadroCod').value = texto;
}

function copy(){
  if (document.getElementById('quadroCod').value != ''){
    document.getElementById('quadroDecod').value = document.getElementById('quadroCod').value;
    document.getElementById('quadroCod').value = '';
  }else{
    document.getElementById('quadroCod').value = document.getElementById('quadroDecod').value;
    document.getElementById('quadroDecod').value = '';
  }
}
