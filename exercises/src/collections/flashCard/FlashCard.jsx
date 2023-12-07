import { useState } from "react";
import questions from "./data";
const FlashCard = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleHover = id => {
    setHoveredId(id);
  };

  const handleLeave = () => {
    setHoveredId(null);
  };

  const handleClick = id => {
    setSelectedId(id !== selectedId ? id : null);
  };
  return (
    <div className="flashcards">
      {questions.map(q => (
        <div
          key={q.id}
          onMouseEnter={() => handleHover(q.id)}
          onMouseLeave={() => handleLeave()}
          onClick={() => handleClick(q.id)}
          className={q.id === selectedId ? "selected" : ""}
        >
          <p>
            {q.id === selectedId ? q.answer : q.id === hoveredId ? `hint: ${q.clue}` : q.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlashCard;
