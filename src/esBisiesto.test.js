import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como bisiesto", () => {
    expect(esBisiesto(4)).toEqual("Es bisiesto");
  });
  it("El 5 no deberia considerarse como bisiesto", () => {
    expect(esBisiesto(5)).toEqual("No es bisiesto");
  });
});
