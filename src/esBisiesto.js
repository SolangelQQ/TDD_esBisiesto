function esBisiesto(anio) {
  if(anio%400 === 0){
    return "Es bisiesto";
  }
  if(anio%100 === 0){
    return "No es bisiesto";
  }

  return "No es bisiesto";
}

export default esBisiesto;
