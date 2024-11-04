import React from "react";

const Calculator = () => {
  const a = 5;
  const b = 3;
  const sum = a + b;

  return (
    <div>
      <h3>Calculator</h3>

      <p>
        {a} + {b} = {sum}
      </p>
    </div>
  );
};

export default Calculator;
