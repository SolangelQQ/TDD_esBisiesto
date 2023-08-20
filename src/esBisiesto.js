function esBisiesto(anio) {
  if(anio%400 === 0){
    return "Es bisiesto";
  }
  else if(anio%100 === 0){
    return "No es bisiesto";
  }
  else if (anio%4 === 0){
    return "Es bisiesto";
  }

  return "No es bisiesto";
}

export default esBisiesto;
