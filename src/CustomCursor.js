import React, { useEffect, useState } from "react";

const CustomCursor = ({ hoverToggle }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Define individual cursor dimensions and offsets
  const cursorSizes = {
    "frog.webp": { width: 90, height: 90, offsetX: 40, offsetY: 40 },
    "frog-pointy.webp": { width: 170, height: 80, offsetX: 127, offsetY: -50 },
  };

  // Determine which cursor to display
  const cursorSrc = isPointer || hoverToggle ? "frog-pointy.webp" : "frog.webp";
  const { width, height, offsetX, offsetY } = cursorSizes[cursorSrc];

  return (
    <img
      src={`${process.env.PUBLIC_URL}/${cursorSrc}`}
      alt="frog cursor"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(-${offsetX}px, -${offsetY}px)`,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.15s ease-out",
      }}
    />
  );
};

export default CustomCursor;