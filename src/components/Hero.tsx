import { Canvas } from "@react-three/fiber";
import { Float, Sparkles, Environment } from "@react-three/drei";
import Bottle from "./Bottle";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Hero() {
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  const { width } = useWindowSize();

  const isMobile = width < 768;

  const bottlePosition: [number, number, number] =
  width < 480
    ? [1.2, -1, 0]
    : width < 768
    ? [1.8, -0.5, 0]
    : [3.2, 0, 0];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      paraRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5, duration: 1 }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.8, duration: 1 }
    );
  }, []);

  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        position: "relative",
        background:
          "radial-gradient(circle at top right, #d8f3dc, #f5f3ec)",
        overflow: "hidden",
      }}
    >
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        camera={{
          position: [0, 0, 8],
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[-5, 5, 5]}
          intensity={2}
        />

        <spotLight
          position={[0, 10, 0]}
          intensity={2}
        />

        <Environment preset="city" />

        <Sparkles
          count={150}
          scale={8}
          size={2}
          speed={0.4}
        />

        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <group position={bottlePosition}>
            <Bottle />
          </group>
        </Float>
      </Canvas>

      {/* Text Content */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "6%" : "8%",
          top: isMobile ? "18%" : "25%",
          width: isMobile ? "88%" : "80%",
          zIndex: 10,
        }}
      >
        <h1
          ref={titleRef}
          style={{
            fontSize: isMobile
              ? "3rem"
              : "clamp(3rem, 8vw, 5rem)",
            color: "#143d2b",
            lineHeight: "1",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Hydration,
          <br />
          Reimagined.
        </h1>

        <p
          ref={paraRef}
          style={{
            fontSize: isMobile ? "1.1rem" : "1.5rem",
            marginTop: "20px",
            color: "#444",
            maxWidth: "500px",
            lineHeight: "1.6",
          }}
        >
          Sustainable bottles for a cleaner planet.
          Experience hydration like never before.
        </p>

        <button
          ref={buttonRef}
          style={{
            marginTop: "30px",
            padding: isMobile
              ? "12px 28px"
              : "15px 35px",
            background: "#14532d",
            color: "white",
            border: "none",
            borderRadius: "50px",
            fontSize: isMobile ? "0.95rem" : "1rem",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}