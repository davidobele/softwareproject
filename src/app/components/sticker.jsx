// Sticker.jsx or Sticker.tsx
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Sticker = ({ type = "normal", children, style }) => {
  const [filterId, setFilterId] = useState(`${uuidv4()}-${type}`);
  const svgRef = useRef(null);
  const [lightPosition, setLightPosition] = useState({ x: 200, y: 0 });
  const latestMouseEventRef = useRef(null);
  const animationFrameRef = useRef(null);

  const updateLightPosition = () => {
    if (!latestMouseEventRef.current || !svgRef.current) return;

    const { top, left, width, height } = svgRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    setLightPosition({
      x: Math.ceil(latestMouseEventRef.current.clientX - centerX),
      y: Math.ceil(latestMouseEventRef.current.clientY - centerY),
    });

    latestMouseEventRef.current = null;
  };

  useEffect(() => {
    setFilterId(`${uuidv4()}-${type}`);

    if (type === "shiny") {
      const handleMouseMove = (event) => {
        latestMouseEventRef.current = event;
        if (!animationFrameRef.current) {
          animationFrameRef.current = requestAnimationFrame(() => {
            updateLightPosition();
            animationFrameRef.current = null;
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [type]);

  return (
    <div className="sticker" style={style}>
      <svg ref={svgRef} width="0" height="0">
        {type === "shiny" && (
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur1" />
            <feSpecularLighting
              result="spec1"
              in="blur1"
              surfaceScale="5"
              specularConstant="0.5"
              specularExponent="120"
              lightingColor="#fff"
            >
              <fePointLight x={lightPosition.x} y={lightPosition.y} z="300" />
            </feSpecularLighting>
            <feComposite
              in="spec1"
              in2="SourceAlpha"
              operator="in"
              result="specOut2"
            />
            <feComposite
              in="SourceGraphic"
              in2="specOut2"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
              result="litPaint"
            />
          </filter>
        )}

        {type === "holographic" && (
          <filter id={filterId}>
            <feMorphology
              in="SourceAlpha"
              result="Dilated"
              operator="dilate"
              radius="4"
            />
            <feTurbulence
              baseFrequency="0.03 0.03"
              seed="1"
              numOctaves="3"
              type="fractalNoise"
              result="turb"
            />
            <feComponentTransfer in="turb" result="gradient">
              <feFuncR type="table" tableValues="1 1 0.3 0 0.98 1" />
              <feFuncG type="table" tableValues="0 0 1 0.3 1 0" />
              <feFuncB type="table" tableValues="0 0.82 0 1 0 0" />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
            <feComposite
              operator="in"
              in="gradient"
              in2="Dilated"
              result="holo"
            />
            <feComposite
              operator="over"
              in2="holo"
              in="SourceGraphic"
              result="swa"
            />
            <feComponentTransfer in="swa">
              <feFuncA type="discrete" tableValues="0 1 1 1 1 1" />
            </feComponentTransfer>
          </filter>
        )}

        {type !== "shiny" && type !== "holographic" && (
          <filter id={filterId}>
            <feMorphology
              in="SourceAlpha"
              result="Dilated"
              operator="dilate"
              radius="4"
            />
            <feFlood floodColor="#fff" result="OutlineColor" />
            <feComposite
              in="OutlineColor"
              in2="Dilated"
              operator="in"
              result="Outline"
            />
            <feMerge>
              <feMergeNode in="Outline" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </svg>

      <div className="sticker-content" style={{ filter: `url(#${filterId})` }}>
        {children}
      </div>
    </div>
  );
};

export default Sticker;
