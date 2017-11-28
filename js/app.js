window.addEvenListener('load', function() {

  var sedeLima = document.getElemetbyId('sedeLima');
  var inscritos = document.getElementById('inscritos');
  var desertores = document.getElementById('desertores');
  var calificados = document.getElementById('calificados');
  var calificadosPorcentaje = document.getElemetbyId('calificadosPorcentaje')

sedeLima.addEvenListener('click',function(event){

  if( event.target){
    inscritos.value=data['LIM']["2016-2"]['students'].length;
  }

                



});














// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
