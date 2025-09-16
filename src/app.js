function toNumber(v) {
  const n = Number(v);
  if (Number.isNaN(n)) throw new Error("Invalid number");
  return n;
}

function add(a, b) {
  return toNumber(a) + toNumber(b);
}
function subtract(a, b) {
  return toNumber(a) - toNumber(b);
}
function multiply(a, b) {
  return toNumber(a) * toNumber(b);
}
function divide(a, b) {
  const nb = toNumber(b);
  if (nb === 0) throw new Error("Division by zero");
  return toNumber(a) / nb;
}

// calculate convenience function: op is one of '+', '-', '*', '/'
function calculate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error("Unknown operator");
  }
}

/* --- minimal DOM wiring so the page works when opened in a browser --- */
(function wireDom() {
  if (typeof document === "undefined") return; // not in browser
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const op = document.getElementById("op");
  const calcBtn = document.getElementById("calc");
  const clearBtn = document.getElementById("clear");
  const result = document.getElementById("result");

  function show(text) {
    result.textContent = String(text);
  }

  calcBtn.addEventListener("click", () => {
    try {
      const res = calculate(a.value, b.value, op.value);
      show(res);
    } catch (err) {
      show(err.message);
    }
  });

  clearBtn.addEventListener("click", () => {
    a.value = "";
    b.value = "";
    op.value = "+";
    show("—");
  });

  // expose for debug in console
  window.calculate = calculate;
})();

/* Export for Jest (CommonJS) when running in Node environment for tests */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {add, subtract, multiply, divide, calculate};
}
