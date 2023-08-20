import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {

  it("El 5 no deberia considerarse como bisiesto", () => {
    expect(esBisiesto(5)).toEqual("No es bisiesto");
  });
  it("Anios divisibles por 400 deberia considerarse como bisiesto", () => {
    expect(esBisiesto(2000)).toEqual("Es bisiesto");
  });
});
