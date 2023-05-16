/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 sun.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sun(props) {
  const { nodes, materials } = useGLTF("./gltf/sun.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={51.47}>
        <mesh
          geometry={nodes.sun1.geometry}
          material={materials.sun}
          scale={0.27}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/sun.glb");