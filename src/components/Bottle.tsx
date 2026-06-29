import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Bottle() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouseY * 0.3,
        0.05
      );

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        mouseX * 0.5,
        0.05
      );

    group.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group ref={group} scale={1.2}>
      {/* Bottle Body */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.9, 0.75, 3.2, 64]} />
        <meshPhysicalMaterial
          color="#14532d"
          metalness={0.9}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>

      {/* Bottom */}
      <mesh position={[0, -1.8, 0]}>
        <cylinderGeometry args={[0.78, 0.78, 0.15, 64]} />
        <meshPhysicalMaterial
          color="#0f3b22"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.55, 0]}>
        <cylinderGeometry args={[0.45, 0.55, 0.5, 64]} />
        <meshPhysicalMaterial
          color="#14532d"
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 2.0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.45, 64]} />
        <meshPhysicalMaterial
          color="#0b1e13"
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      {/* Handle */}
      <mesh position={[0, 2.55, 0]}>
        <torusGeometry args={[0.35, 0.08, 30, 100]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
    </group>
  );
}