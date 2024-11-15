import { Suspense, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Game() {
  const cityModel = useGLTF("./public/models/city/scene.gltf");
  const carModel = useGLTF("./public/models/car/scene.gltf");

  const [carPosition, setCarPosition] = useState([0.9, 0.3, 12]);

  return (
    <div className="container">
      <Canvas
        camera={{
          position: [0, 4, 20],
          fov: 85,
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {/* <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
          {/* Add Ambient Light */}
          <ambientLight intensity={1.5} />

          {/* Add SpotLight */}
          <spotLight
            position={[0, 5, 15]} // Adjust the position to focus on the car
            angle={0.1}
            intensity={5} // Increase intensity for more illumination
            penumbra={1}
            castShadow={true} // Optionally, enable shadows if needed
          />

          {/* Add a Directional Light to illuminate models */}
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <primitive
            object={carModel.scene}
            position={carPosition}
            scale={0.7}
            rotation={[0, Math.PI, 0]}
          />
          <primitive object={cityModel.scene} />
        </Suspense>
        <OrbitControls />
      </Canvas>

      <div className="overlay">
        <div className="quizz">
          <h1 className="question">
            Cum ar trebui să traversezi corect strada pentru a fi în siguranță?
          </h1>
          <div className="quizz-container">
            <div className="option">
              Să te uiți în stânga și în dreapta, apoi să traversezi pe trecerea
              de pietoni.
            </div>
            <div className="option">
              Să alergi repede înainte, fără să te uiți.
            </div>
            <div className="option">
              Să traversezi doar dacă vezi că alți oameni traversează.
            </div>
            <div className="option">
              Să traversezi doar când nu vezi nicio mașină, chiar dacă nu e
              trecere de pietoni.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
