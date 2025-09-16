const {add, subtract, multiply, divide, calculate} = require("./app");

describe("basic arithmetic functions", () => {
  test("add two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add("1.5", "2.25")).toBeCloseTo(3.75);
  });

  test("subtract two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract("5.5", "2.2")).toBeCloseTo(3.3);
  });

  test("multiply two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("divide two numbers", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide("5", "2")).toBeCloseTo(2.5);
  });

  test("divide by zero throws", () => {
    expect(() => divide(1, 0)).toThrow("Division by zero");
  });

  test("invalid numbers throw", () => {
    expect(() => add("a", 1)).toThrow("Invalid number");
    expect(() => divide("foo", "bar")).toThrow("Invalid number");
  });

  test("calculate convenience function for operators", () => {
    expect(calculate(1, 2, "+")).toBe(3);
    expect(calculate(5, 2, "-")).toBe(3);
    expect(calculate(3, 3, "*")).toBe(9);
    expect(calculate(9, 3, "/")).toBe(3);
  });

  test("calculate with unknown operator throws", () => {
    expect(() => calculate(1, 2, "%")).toThrow("Unknown operator");
  });
});
