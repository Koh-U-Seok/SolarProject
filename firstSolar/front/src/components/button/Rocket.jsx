/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 rocket.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rocket(props) {
  const { nodes, materials } = useGLTF("./gltf/rocket.glb");
  return (
    <group {...props} dispose={null} scale={[0.47, 0.47, 0.47]}>
      <mesh
        geometry={nodes.Rocket2_1.geometry}
        material={materials.Rocket_BPR}
      />
    </group>
  );
}

useGLTF.preload("./gltf/rocket.glb");
