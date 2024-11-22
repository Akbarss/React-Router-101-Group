import React, { useEffect, useState } from "react";

// Хук useEffect в React
// Что такое useEffect?
// Хук useEffect позволяет выполнять побочные эффекты в функциональных компонентах. Побочные эффекты включают:

// Получение данных из API.
// Подписки (например, на события).
// Изменение документа (DOM).
// Очистку ресурсов.

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // запускается только при монтировании

  return <div>Счётчик: {count}</div>;
};

export default Timer;
