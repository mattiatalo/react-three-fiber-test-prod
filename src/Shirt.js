import * as TRHEE from "three";
import {
  Html,
  useGLTF,
  useTexture,
  Decal,
  PivotControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";

export default function Shirt({ pos = 0 }, ...props) {
  const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb");
  const texture = useTexture("IMG_6969.png");
  materials.lambert1.color = new TRHEE.Color("#7CFC00");
  const shirt = useRef();

  return (
    <>
      <mesh
        ref={shirt}
        position-x={pos}
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={0.8}
        {...props}
        dispose={null}
      >
        <Decal
          position={[0, 0.04, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.25}
          opacity={0.99}
          //map={texture}
          //s map-anisotropy={16}
        />

        {/*  <Html wrapperClass="label" position={[0, 0, 0]}>
          Ciao
        </Html> */}
      </mesh>
      <mesh castShadow rotation-x={-Math.PI / 2} position={[0, -0.35, 0.38]}>
        <planeGeometry />
        <MeshReflectorMaterial blur={[1000, 1000]} mirror={0.5} mixBlur={1} />
      </mesh>
    </>
  );
}

useGLTF.preload("/shirt_baked_collapsed.glb");
