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

  const renderStars = (boxShadow, sizeClass = "") => {
    const tiles = [0, 1, 2, 3, 4];

    return tiles.map((i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${i * 2000}px`,
          width: "2000px",
          height: "100%",
        }}
      >
        <div
          className={`stars-content ${sizeClass}`}
          style={{ boxShadow }}
        ></div>
        <div
          className={`stars-content ${sizeClass}`}
          style={{ boxShadow, top: "2000px" }}
        ></div>
      </div>
    ));
  };

  return (
    <div className="stars-container">
      <div className="stars-layer layer-1">{renderStars(smallStars)}</div>
      <div className="stars-layer layer-2">
        {renderStars(mediumStars, "size-2")}
      </div>
      <div className="stars-layer layer-3">
        {renderStars(largeStars, "size-3")}
      </div>
    </div>
  );
};

export default Stars;
