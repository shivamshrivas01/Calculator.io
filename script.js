let n1 = "";
let n2 = "";
let operator = "";
let total = "";

$(document).ready(function () {
  $("button").on("click", function (e) {
    let btn = e.target.innerHTML;
    if (btn >= "0" && btn <= "9") {
      handleNumber(btn);
    } else if (btn == "AC") {
      $(".input").text("0");
      n1 = "";
      n2 = "";
      operator = "";
      total = "";
    } else {
      handleOperator(btn);
    }
  });
});

function handleNumber(num) {
  if (operator === "") {
    n1 += num;
    displayButton(n1);
  } else {
    n2 += num;
    displayButton(`${n1} ${operator} ${n2}`);
  }
}

function handleOperator(op) {
  if (operator === "") {
    operator = op;
    displayButton(`${n1} ${operator}`);
  } else {
    handleTotal();
    operator = op;
  }
}

function handleTotal() {
  switch (operator) {
    case "+":
      total = +n1 + +n2;
      displayButton(total);
      break;
    case "-":
      total = +n1 - +n2;
      displayButton(total);
      break;
    case "/":
      total = +n1 / +n2;
      displayButton(total);
      break;
    case "x":
      total = +n1 * +n2;
      displayButton(total);
      break;
    case "%":
      total = +n1 % +n2;
      displayButton(total);
      break;
    case "x²":
      total = +n1 * +n1;
      displayButton(total);
      break;
  }

  updateVariables();
}
function displayButton(btn) {
  $(".input").text(btn);
}

function updateVariables() {
  n1 = total;
  n2 = "";
  operator = "";
}
