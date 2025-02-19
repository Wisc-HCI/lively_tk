/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useGLTF } from "@react-three/drei";
import mesh from "./lower_arm_left.glb";

export default function Model() {
  const { nodes, materials } = useGLTF(mesh);
  return [
    {
      type: "group",
      children: [
        {
          type: "raw",
          geometry: nodes.Mesh001.geometry,
          material: materials["Material.001"],
          position: [0, 0.01, 0],
          scale: [-1, -1, -1],
          rotation: [-Math.PI, 0, -0.34],
        },
        {
          type: "raw",
          geometry: nodes.Mesh.geometry,
          material: materials["cf2be1de-b81c-4d69-9418-dde91d266086.002"],
          position: [0, 0.01, 0],
          scale: [-1, -1, -1],
          rotation: [-Math.PI, 0, -0.34],
        },
      ],
    },
  ];
}

useGLTF.preload(mesh);
