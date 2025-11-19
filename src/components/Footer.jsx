import { useState } from "react";
import "./Footer.css";

export const Footer = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClicks = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 10) {
      window.open("https://prevter.me/soggy/soggy.jpg", "_blank");
      setClickCount(0);
    }
  };

  return (
    <p className="footer">
      © 2024 <span onClick={handleClicks}>Divam</span>. All rights reserved.
    </p>
  );
};
