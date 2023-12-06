import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // date
  const date = new Date("26 Januari 2025");
  date.setDate(date.getDate() + count);

  //step
  const handleAddStep = () => {
    setStep(s => (s < 100 ? s + 1 : s));
  };

  const handleSubtractStep = () => {
    setStep(s => (s > 1 ? s - 1 : s));
  };

  //count
  const handleSubtractCount = () => {
    setCount(c => (c > 0 ? c - step : 0));
  };

  const handleAddCount = () => {
    setCount(c => (c < 100 ? c + step : c));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>
        <button onClick={handleSubtractStep}> - </button>
        <span>Step: {step}</span>
        <button onClick={handleAddStep}> + </button>
      </h4>
      <h4>
        <button onClick={handleSubtractCount}> - </button>
        <span>Count: {count}</span>
        <button onClick={handleAddCount}> + </button>
      </h4>
      {count === 0 ? <h3>Today date is</h3> : <h3>{count} day from today is</h3>}
      <h3>{date.toDateString()}</h3>
    </div>
  );
};

export default Counter;
