// src/ImageTrail.js
import React, { useState, useRef } from "react";
import { useSprings, animated } from "react-spring";
import styled from "styled-components";

const TrailContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const AnimatedImage = styled(animated.img)`
  position: absolute;
  width: 50px;
  height: 50px;
  pointer-events: auto;
  will-change: transform, opacity;
  z-index: ${({ zIndex }) => zIndex}; /* Fix for zIndex */
`;

const FullscreenImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const ImageTrail = ({ images }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const indexRef = useRef(0);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  // Calculate distance threshold relative to screen size
  const distanceThresholdRatio = 0.02; // 2% of the screen diagonal
  const distanceThreshold =
    Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) *
    distanceThresholdRatio;

  const [springs, api] = useSprings(images.length, (index) => ({
    xy: [0, 0],
    opacity: index === 0 ? 1 : 0.8,
    zIndex: index === 0 ? 1 : 0,
    config: { mass: 10, tension: 2000, friction: 200 },
  }));

  const handleMove = (x, y) => {
    const dx = x - lastMousePosition.current.x;
    const dy = y - lastMousePosition.current.y;
    const distance = Math.hypot(dx, dy);

    if (distance > distanceThreshold) {
      lastMousePosition.current = { x, y };
      indexRef.current = Math.abs(indexRef.current + 1) % images.length;
      api.start((index) => ({
        xy: [x, y],
        opacity: index === indexRef.current ? 1 : 0.8,
        zIndex: index === indexRef.current ? 1 : 0,
      }));
    }
  };

  const handleClick = (index) => {
    setFullscreenImage(images[index]);
  };

  return (
    <>
      {fullscreenImage && (
        <FullscreenImage
          src={fullscreenImage}
          onClick={() => setFullscreenImage(null)}
        />
      )}
      <TrailContainer
        onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
        onTouchMove={(e) =>
          handleMove(e.touches[0].clientX, e.touches[0].clientY)
        }
      >
        {springs.map((props, index) => (
          <AnimatedImage
            key={index}
            src={images[index]}
            style={{
              transform: props.xy.to(
                (x, y) => `translate3d(${x}px, ${y}px, 0)`
              ),
              opacity: props.opacity,
              zIndex: props.zIndex,
            }}
            onClick={() => handleClick(index)}
          />
        ))}
      </TrailContainer>
    </>
  );
};

export default ImageTrail;
