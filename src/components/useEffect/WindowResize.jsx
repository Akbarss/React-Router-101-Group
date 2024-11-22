import React, { useEffect, useState } from "react";

const WindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Подписка на событие
    window.addEventListener("resize", handleResize);

    // Очистка при размонтировании
    return () => window.removeEventListener("resize", handleResize);
  }, []); // эффект запускается один раз

  return <div>Ширина окна: {width}px</div>;
};

export default WindowResize;
