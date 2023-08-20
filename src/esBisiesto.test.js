import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("Deberia calcular el numero 4 bisiesto", () => {
    expect(esBisiesto(4)).toEqual("Es bisiesto");
  });
});
