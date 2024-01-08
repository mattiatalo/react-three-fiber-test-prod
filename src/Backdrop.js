import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

export default function Backdrop() {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={100}
      alphaTest={1}
      opacity={0.8}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.13]}
      color="green"
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.45}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}
