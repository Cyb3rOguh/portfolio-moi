import React, { useEffect, useState } from "react";

const CustomCursor = ({ hoverToggle }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) {
        setIsPointer(false);
        return;
      }
      const tag = target.tagName.toLowerCase();
      const isInteractive =
        tag === "a" ||
        tag === "button" ||
        tag === "input" ||
        tag === "select" ||
        tag === "textarea" ||
        target.getAttribute("role") === "button" ||
        target.closest("a, button, [role='button']") ||
        target.classList.contains("toggle-option");
      setIsPointer(!!isInteractive);
    };

    const handleMouseOut = () => {
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

  const cursorSrc = isPointer || hoverToggle ? "frog-pointy.png" : "frog.png";

  return (
    <img
      src={`${process.env.PUBLIC_URL}/${cursorSrc}`}
      alt="frog cursor"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "80px",
        height: "80px",
        transform: "translate(-16px, -16px)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;