import React, { useEffect, useState } from "react";

// Эффект с зависимостями

const DependencyEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Счётчик изменился: ${count}`);
  }, [count]); // эффект запускается при изменении count

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
    </div>
  );
};

export default DependencyEffect;
