import { useMemo } from "react";
import "./Stars.css";

const Stars = () => {
  const generateStars = (count) => {
    let value = "";
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      value += `${x}px ${y}px currentColor`;
      if (i < count - 1) {
        value += ", ";
      }
    }
    return value;
  };

  const smallStars = useMemo(() => generateStars(700), []);
  const mediumStars = useMemo(() => generateStars(200), []);
  const largeStars = useMemo(() => generateStars(100), []);

  return (
    <div className="stars-container">
      <div className="stars-layer layer-1">
        <div className="stars-content" style={{ boxShadow: smallStars }}></div>
        <div
          className="stars-content"
          style={{ boxShadow: smallStars, top: "2000px" }}
        ></div>
      </div>
      <div className="stars-layer layer-2">
        <div
          className="stars-content size-2"
          style={{ boxShadow: mediumStars }}
        ></div>
        <div
          className="stars-content size-2"
          style={{ boxShadow: mediumStars, top: "2000px" }}
        ></div>
      </div>
      <div className="stars-layer layer-3">
        <div
          className="stars-content size-3"
          style={{ boxShadow: largeStars }}
        ></div>
        <div
          className="stars-content size-3"
          style={{ boxShadow: largeStars, top: "2000px" }}
        ></div>
      </div>
    </div>
  );
};

export default Stars;
