const { sumar, restar } = require("./operaciones");

test("suma de 2 + 3 debe ser 5", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("suma de -1 + 1 debe ser 0", () => {
  expect(sumar(-1, 1)).toBe(0);
});

test("resta de 5 - 2 debe ser 3", () => {
  expect(restar(5, 2)).toBe(3);
});

test("resta de 2 - 3 debe ser -1", () => {
  expect(restar(2, 3)).toBe(-1);
});
