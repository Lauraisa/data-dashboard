
inactivesLimaFirts();
var student = data['LIM']['2016-2']['students'];
var desertorPorcentaje = (contLimaFirts / student.length) * 100;
var selection = document.getElementById('select1');
selection.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection.value === '2016-2') {
    console.log(containerDesertors.textContent = parseInt(desertorPorcentaje) + '%');
  }
});


function proter() {

  var promoters = document.getElementById('lima');
  var promotersLim = 0;
  promoters = data['LIM']['2016-2']['ratings'][0]['nps']['promoters'];
  for (var i = 0; i < promoters.length; i++) {
    if (promoters[i]['promoters'] === true) {
      promotersLim++;
    }

  }
};
proter();

var selection = document.getElementById('select1');
selection.addEventListener('change', function() {
  var containerPromoters = document.getElementById('textPromote');

  if (selection.value = '2016-2') {
    containerPromoters.textContent = promotersLim;
  }
});

/* life skills*/

var jedimasterLima1 = [ data['LIM']['2016-2']['ratings'][0]['teacher'],
  data['LIM']['2017-1']['ratings'][0]['teacher'],
  data['LIM']['2017-2']['ratings'][0]['teacher']];
var sumaJedi = 0;
for (var i= 0; i<jedimasterLima.length;i++);
sumaJedi +=sumaJedi;

var containerJedi = document.getElementById('jedi');
var selection = document.getElementById('select1');
selection.addEventListener('change', function() {
  if (selection.value = '2016-2') {
    containerPromoters.textContent = promotersLim;
  }
});



