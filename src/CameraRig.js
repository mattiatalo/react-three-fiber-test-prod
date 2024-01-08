import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";

export default function CameraRig({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,

      [-state.pointer.y / 4, state.pointer.x / 2, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}
