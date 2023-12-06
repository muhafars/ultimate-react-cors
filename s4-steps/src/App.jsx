import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];
const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //create handler function first pass it don't call it directly at jsx
  const handlePrevious = () => {
    setStep(s => (s > 1 ? s - 1 : 1));
  };
  const handleNext = () => {
    if (step < 3) {
      setStep(step => step + 1);
    }
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen(is => !is)}>
        {/* set it to always opposite of current stat*/}
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
