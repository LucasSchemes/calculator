import react from "react";
import "./Calculator.css";

export default function Calculator() {
    const buttons = [
     'DEL', 'AC', '%', '/',
     '7', '8', '9', '*',
     '4', '5', '6', '-',
     '1', '2', '3', '+',
     '+/-' , '0', '.', '='
    ];
    const [number, setNumber] = react.useState("0");
    const [operator, setOperator] = react.useState(null);
    const [previousNumber, setPreviousNumber] = react.useState(null);
    
    function handleButtonClick(value) {
        
        if (!isNaN(value)) {
            setNumber(prev => (prev === "0" ? value : prev + value));
            return;
        } 
        if (value === ".") {
            setNumber(prev => {
            if (prev.includes(".")) return prev;       
            if (prev === "" || prev === "0") return "0."; 
            return prev + ".";
        });
        return;
        }
        
        if (value === 'AC') {
            clear();
            return;
        } 
        
        if (value === '+/-') {
            changeSign();
            return;

        }
        if (value === 'DEL') {
            number.length > 0 && setNumber(number.slice(0, -1));
            return;
        }
          if (value === "%") {
            percentage();
            return;
        }
        if (value === '=') {
            calculate();
            return;
        } else {
            if (number === "" && previousNumber !== null) {
                setOperator(value);
                return;
            }
            else {
                if (previousNumber === null) {
                    setPreviousNumber(number);
                    setNumber("");
                    setOperator(value);
                } else {
                    const result = compute(previousNumber, number, operator);
                    setPreviousNumber(result.toString());
                    setNumber("");
                    setOperator(value);
                }
            }
        }
    }

    function percentage() {
    
      setNumber(prev => {
      
    const cur = parseFloat(prev);
      if (isNaN(cur)) return "0";
      if (previousNumber !== null && operator !== null) {
        const prevNum = parseFloat(previousNumber);
        if (isNaN(prevNum)) return "0";
        const percentValue = (prevNum * cur) / 100;
        return percentValue.toString();
      }
      
      return (cur / 100).toString();
    
    });
  }

    function compute(prev, current, op) {
        const prevNum = parseFloat(prev);
        const currentNum = parseFloat(current);
        if (isNaN(prevNum) || isNaN(currentNum)) return 0;
        switch (op) {
            case '+':
                return prevNum + currentNum;
            case '-':
                return prevNum - currentNum;
            case '*':
                return prevNum * currentNum;
            case '/':
                return currentNum === 0 ? "Erro" : prevNum / currentNum;
            default:
                return currentNum;
        }
    }

    function calculate() {
        if (previousNumber !== null && operator !== null && number !== "") {
            const result = compute(previousNumber, number, operator);
            setNumber(result.toString());
            setPreviousNumber(null);
            setOperator(null);
        }
    }

    function clear() {
        setNumber("");
        setOperator(null);
        setPreviousNumber(null);
    }

    function changeSign() {
        if (number) {
            setNumber((parseFloat(number) * -1).toString());
        }   
    }

    return (
    <div className="calculator">    
    <div className="display">{number || previousNumber || "0"}</div>
    <div className="buttons">
        {buttons.map((btn, index) => (
            <button key={index} className="calc-btn" onClick={() => handleButtonClick(btn)}>
                {btn}
            </button>
        ))}
    </div>
    </div>
    );
}
