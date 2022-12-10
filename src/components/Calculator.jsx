import { useState } from "react";
import { Button, Container, Current, Previous, Screen } from "../styles/Main";

const Calculator = () => {
  const [current, SetCurrent] = useState("");
  const [previous, SetPrevious] = useState("");
  const [operationValue, SetOperationValue] = useState("");

  const numberHandler = (e) => {
    const value = e.target.innerText;
    if (value === "." && current.includes(".")) return;
    SetCurrent(current + value);
  };

  const operationHandler = (e) => {
    const value = e.target.innerText;
    let oparateValue = compute();

    if (!current) return;

    if (previous) {
      SetPrevious(oparateValue);
    } else {
      SetPrevious(current);
    }
    SetOperationValue(value);

    SetCurrent("");
  };

  const equalHandler = () => {
    let value = compute();

    if (value === undefined || value == null) return;

    SetCurrent(value);
    SetPrevious("");
    SetOperationValue("");
  };

  const cleaerHandler = () => {
    SetCurrent("");
    SetPrevious("");
    SetOperationValue("");
  };

  const deleteHandler = () => {
    SetCurrent(String(current).slice(0, -1));
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (operationValue) {
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "×":
        result = previousNumber * currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      case "÷":
        result = previousNumber / currentNumber;
        break;
      default:
        return;
    }
    return result;
  };
  return (
    <>
      <Container>
        <Screen>
          <Current carr={current}>{current}</Current>
          <Previous>
            {previous}
            <span > {operationValue} </span>
            {previous ? current : ""}
          </Previous>
        </Screen>
        <Button spanTwo={2} operation onClick={cleaerHandler}>
          AC
        </Button>
        <Button operation onClick={deleteHandler}>
          C
        </Button>
        <Button operation onClick={operationHandler}>
          ÷
        </Button>
        <Button onClick={numberHandler}>7</Button>
        <Button onClick={numberHandler}>8</Button>
        <Button onClick={numberHandler}>9</Button>
        <Button operation onClick={operationHandler}>
          ×
        </Button>
        <Button onClick={numberHandler}>4</Button>
        <Button onClick={numberHandler}>5</Button>
        <Button onClick={numberHandler}>6</Button>
        <Button operation onClick={operationHandler}>
          -
        </Button>
        <Button onClick={numberHandler}>1</Button>
        <Button onClick={numberHandler}>2</Button>
        <Button onClick={numberHandler}>3</Button>
        <Button operation   onClick={operationHandler}>
          +
        </Button>
        <Button onClick={numberHandler}>.</Button>
        <Button onClick={numberHandler}>0</Button>
        <Button operation spanTwo={2} onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
};

// spanTwoRow={2}
export default Calculator;
