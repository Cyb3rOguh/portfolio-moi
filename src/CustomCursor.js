import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const computedCursor = window.getComputedStyle(target).cursor;
      setIsPointer(computedCursor === "pointer");
    };

    const handleMouseOut = (e) => {
      setIsPointer(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <img
      src={`${process.env.PUBLIC_URL}/${isPointer ? "frog-pointy.png" : "frog.png"}`}
      alt="frog cursor"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "80px",
        height: "80px",
        transform: "translate(-16px, -16px)", // adjust hotspot
        pointerEvents: "none", // ignore clicks
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;