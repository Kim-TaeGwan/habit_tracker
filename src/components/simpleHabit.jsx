import React, { useCallback, useState, useRef, useEffect } from "react";
import "../app.css";

const SimpleHabit = () => {
  const [count, setCount] = useState(0); // 메모리에 저장해놓고 갱신
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated! : ${count} `);
  }, []);
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
