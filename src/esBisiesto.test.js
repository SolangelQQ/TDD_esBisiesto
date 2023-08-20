import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como bisiesto", () => {
    expect(esBisiesto(4)).toEqual("Es bisiesto");
  });
  it("El 5 no deberia considerarse como bisiesto", () => {
    expect(esBisiesto(5)).toEqual("No es bisiesto");
  });
  it("Anios divisibles por 400 deberia considerarse como bisiesto", () => {
    expect(esBisiesto(2000)).toEqual("Es bisiesto");
  });
  it("Anios divisibles por 100 pero no por 400 deberia considerarse como no bisiesto", () => {
    expect(esBisiesto(1700)).toEqual("No es bisiesto");
  });
  it("Anios divisibles por 4 pero no por 100 deberia considerarse como bisiesto", () => {
    expect(esBisiesto(2008)).toEqual("Es bisiesto");
  });
  it("Anios que no son divisibles por 4 deberia considerarse como no bisiesto", () => {
    expect(esBisiesto(2018)).toEqual("No es bisiesto");
  });


});
