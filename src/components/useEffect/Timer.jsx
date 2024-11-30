import React, { useEffect, useState } from "react";

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount((prevCount) => prevCount + 1);
    };

    // Добавляем обработчик кликов
    document.addEventListener("click", handleClick);

    // Очищаем обработчик при размонтировании
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // Эффект запускается только при монтировании

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Счётчик кликов</h1>
      <p>Количество кликов на странице: {clickCount}</p>
    </div>
  );
};

export default ClickCounter;
