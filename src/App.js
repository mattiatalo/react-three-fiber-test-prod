import { useRef, StrictMode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import * as TRHEE from "three";
import { useControls } from "";
import {
  useGLTF,
  Environment,
  Center,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  PivotControls,
  Html,
} from "@react-three/drei";

import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

export function App({ position = [0, 0, 2.5], fov = 25 }) {
  const ctrl = useControls({
    position: 0.1,
  });
  return (
    <>
      <Canvas
        shadows
        camera={{ position, fov }}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
      >
        <ambientLight intensity={0.5} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />

        <CameraRig>
          <Backdrop />
          {/*       <PivotControls scale={100} fixed depthTest={false} />*/}
          <Shirt pos={ctrl.position} />
        </CameraRig>

        <OrbitControls enableRotate={false} enablePan={false} />
      </Canvas>
    </>
  );
}
