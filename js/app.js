

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

/* 2016 -2 lima */
var contadorLimaFirst = 0;
function activesLimaFirts() {
  var student = data['LIM']['2016-2']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorLimaFirst++;
    }
  }
}
var contLimaFirts = 0;
function inactivesLimaFirts() {
  var student = data['LIM']['2016-2']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contLimaFirts++;
    }
  }
}

/* 2017 -1 lima */
var contadorLimaSecond = 0;
function activesLimaSecond() {
  var student = data['LIM']['2017-1']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorLimaSecond++;
    }
  }
}
var contLimaSecond = 0;
function inactivesLimaSecond() {
  var student = data['LIM']['2017-1']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contLimaSecond++;
    }
  }
}
/* 2017 -2 lima */
var contadorLimaThird = 0;
function activesLimaThird() {
  var student = data['LIM']['2017-2']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorLimaThird++;
    }
  }
}
var contLimaThird = 0;
function inactivesLimaThird() {
  var student = data['LIM']['2017-2']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contLimaThird++;
    }
  }
}
/* 2016 -2 arequipa */
var contadorFirtsArequipa = 0;
function activesArequipa() {
  var student = data['AQP']['2016-2']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorFirtsArequipa++;
    }
  }
}
var contArequipaFirts = 0;
function inactivesArequipa() {
  var student = data['AQP']['2016-2']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contArequipaFirts++;
    }
  }
}
/*  arequipa 2017-1 */

var contadorArequipaSecond = 0;
function activesArequipaSecond() {
  var student = data['AQP']['2017-1']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorArequipaSecond++;
    }
  }
}
var contArequipaSecond = 0;
function inactivesArequipaSecond() {
  var student = data['AQP']['2017-1']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contArequipaSecond++;
    }
  }
}
/* Santiago de Chile 2016-2 */
var contadorChileFirst = 0;
function activesChileFirst() {
  var student = data['SCL']['2016-2']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorChileFirst++;
    }
  }
}
var contChileFirst = 0;
function inactivesChileFirst() {
  var student = data['SCL']['2016-2']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contChileFirst++;
    }
  }
}

/* Santiago de Chile 2017-1 */
var contadorChileSecond = 0;
function activesChileSecond() {
  var student = data['SCL']['2017-1']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorChileSecond++;
    }
  }
}
var contChileSecond = 0;
function inactivesChileSecond() {
  var student = data['SCL']['2017-1']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contChileSecond++;
    }
  }
}

/* Santiago de Chile 2017-2 */
var contadorChileThird = 0;
function activesChileThird() {
  var student = data['SCL']['2017-2']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorChileThird++;
    }
  }
}
var contChileThird = 0;
function inactivesChileThird() {
  var student = data['SCL']['2017-2']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contChileThird++;
    }
  }
}

/* Mexico 2017-1 */
var contadorMexicoFirst = 0;
function activesMexicoFirst() {
  var student = data['SCL']['2017-1']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorMexicoFirst++;
    }
  }
}
var contMexicoFirst = 0;
function inactivesMexicoFirst() {
  var student = data['SCL']['2017-1']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contMexicoFirst++;

    }
  }
}

/* Mexico 2017-2 */
var contadorMexicoSecond = 0;
function activesMexicoSecond() {
var student = data['SCL']['2017-2']['students'];
  for (var i = 0; i < student.length; i++) {
    if (student[i]['active'] === true) {
      contadorMexicoSecond++;
    }
  }
}
var contMexicoSecond = 0;
function inactivesMexicoSecond() {
  var student = data['SCL']['2017-2']['students'];
  for (var j = 0; j < student.length; j++) {
    if (student[j]['active'] === false) {
      contMexicoSecond++;
    }
  }
}
activesLimaFirts(); activesLimaSecond();activesLimaThird();


var selection = document.getElementById('select1');
selection.addEventListener('change', function() {
  var containerEnrollment = document.getElementById('textEnrollmet');
  if (selection.value === '2016-2') {
    containerEnrollment.textContent = contadorLimaFirst;
  } else if (selection.value === '2017-1') {
    containerEnrollment.textContent = contadorLimaSecond;
  } else if (selection.value === '2017-2') {
    containerEnrollment.textContent = contadorLimaThird;
  }
});

activesArequipa(); activesArequipaSecond();

var selection2 = document.getElementById('select2');
selection2.addEventListener('change', function() {
  var containerEnrollment = document.getElementById('textEnrollmet');
  if (selection2.value === '2016-2') {
    containerEnrollment.textContent = contadorFirtsArequipa ;
  } else if (selection2.value === '2017-1') {
    containerEnrollment.textContent = contadorArequipaSecond;
  }
});

activesChileFirst(); activesChileSecond();activesChileThird();

var selection3 = document.getElementById('select3');
selection3.addEventListener('change', function() {
  var containerEnrollment = document.getElementById('textEnrollmet');
  if (selection3.value === '2016-2') {
    containerEnrollment.textContent = contadorChileFirst ;
  } else if (selection3.value === '2017-1') {
    containerEnrollment.textContent = contadorChileSecond;
  } else if (selection3.value === '2017-2') {
    containerEnrollment.textContent = contadorChileThird;
  }
});

activesMexicoFirst(); activesMexicoSecond();

var selection4 = document.getElementById('select4');
selection4.addEventListener('change', function() {
  var containerEnrollment = document.getElementById('textEnrollmet');
  if (selection4.value === '2017-1') {
    containerEnrollment.textContent = contadorMexicoFirst ;
  } else if (selection4.value === '2017-2') {
    containerEnrollment.textContent = contadorMexicoSecond;
  }
});
/* accediendo al porcentaje  de  desertoras*/

inactivesLimaFirts();
var student = data['LIM']['2016-2']['students'];
var desertorPorcentaje1 = (contLimaFirts / student.length) * 100;
var selection = document.getElementById('select1');
selection.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection.value === '2016-2') {
    console.log(containerDesertors.textContent = parseInt(desertorPorcentaje1) + '%');
  }
});


inactivesLimaSecond();

var student = data['LIM']['2017-1']['students'];
var desertorPorcentaje2 = (contLimaSecond / student.length) * 100;
var selection = document.getElementById('select1');
selection.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection.value === '2017-1') {
    containerDesertors.textContent = parseInt(desertorPorcentaje2) + '%';
  }
});


inactivesLimaThird();

var student = data['LIM']['2017-2']['students'];
var desertorPorcentaje3 = (contLimaThird / student.length) * 100;
var selection = document.getElementById('select1');
selection.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection.value === '2017-2') {
    containerDesertors.textContent = parseInt(desertorPorcentaje3) + '%';
  }
});

inactivesArequipa();

var student = data['AQP']['2016-2']['students'];
var desertorPorcentaje4 = (contArequipaFirts / student.length) * 100;
var selection2 = document.getElementById('select2');
selection2.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection2.value === '2016-2') {
    containerDesertors.textContent = parseInt(desertorPorcentaje4) + '%';
  }
});

inactivesArequipaSecond();

var student = data['AQP']['2017-1']['students'];
var desertorPorcentaje5 = (contArequipaSecond / student.length) * 100;
var selection2 = document.getElementById('select2');
selection2.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection2.value === '2017-1') {
    containerDesertors.textContent = parseInt(desertorPorcentaje5) + '%';
  }
});

inactivesChileFirst();
var student = data['SCL']['2016-2']['students'];
var desertorPorcentaje5 = (contChileFirst / student.length) * 100;
var selection3 = document.getElementById('select3');
selection3.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection3.value === '2016-2') {
    containerDesertors.textContent = parseInt(desertorPorcentaje5) + '%';
  }
});

inactivesChileSecond();
var student = data['SCL']['2017-1']['students'];
var desertorPorcentaje6 = (contChileSecond / student.length) * 100;
var selection3 = document.getElementById('select3');
selection3.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection3.value === '2017-1') {
    containerDesertors.textContent = parseInt(desertorPorcentaje6) + '%';
  }
});

inactivesChileThird();
var student = data['SCL']['2017-2']['students'];
var desertorPorcentaje7 = (contChileThird / student.length) * 100;
var selection3 = document.getElementById('select3');
selection3.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection3.value === '2017-2') {
    containerDesertors.textContent = parseInt(desertorPorcentaje7) + '%';
  }
});

inactivesMexicoFirst();
var student = data['CDMX']['2017-1']['students'];
var desertorPorcentaje8 = (contMexicoFirst / student.length) * 100;
var selection4 = document.getElementById('select4');
selection4.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection4.value === '2017-1') {
    containerDesertors.textContent = parseInt(desertorPorcentaje8) + '%';
  }
});

inactivesMexicoSecond();
var student = data['CDMX']['2017-2']['students'];
var desertorPorcentaje9 = (contMexicoFirst / student.length) * 100;
var selection4 = document.getElementById('select4');
selection4.addEventListener('change', function() {
  var containerDesertors = document.getElementById('desertores');
  if (selection4.value === '2017-2') {
    containerDesertors.textContent = parseInt(desertorPorcentaje9) + '%';
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
  }