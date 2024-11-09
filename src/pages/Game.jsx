import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Game() {
  const cityModel = useGLTF("./public/models/city/scene.gltf");
  const carModel = useGLTF("./public/models/car/scene.gltf");

  return (
    <div className="container">
      <Canvas
        camera={{
          position: [0, 5, 20],
          fov: 65,
        }}
      >
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <OrbitControls />
        <Suspense fallback={<div>Loading...</div>}>
          <primitive object={cityModel.scene} />
          <primitive
            object={carModel.scene}
            position={[1, 0.3, 1]}
            scale={0.7}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
