import React, { useEffect, useRef } from "react";
import "./AnimatedCursor.css";

export default function AnimatedCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const movedRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // move the small dot exactly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }

      // reveal cursor on first move (prevents flicker on load)
      if (!movedRef.current) {
        movedRef.current = true;
        dotRef.current && dotRef.current.classList.add("cursor--visible");
        ringRef.current && ringRef.current.classList.add("cursor--visible");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // easing for the trailing ring
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // enlarge ring when hovering clickable elements
    const onMouseOver = (e) => {
      const el = e.target;
      const isClickable = el.closest && el.closest("a, button, input[type='button'], input[type='submit'], .cursor-hover");
      if (isClickable) ringRef.current && ringRef.current.classList.add("cursor--hover");
      else ringRef.current && ringRef.current.classList.remove("cursor--hover");
    };
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
