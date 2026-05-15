import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const FloatingIsland = () => {
  const { scene, nodes } = useGLTF("/floating_island/scene.gltf");

  // The floating island model comes with a large 'sky' sphere that obscures 
  // the island from the outside. We hide it so we can see the island.
  if (nodes.sky) nodes.sky.visible = false;
  if (nodes.sky_blinn1_0) nodes.sky_blinn1_0.visible = false;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <primitive
        object={scene}
        scale={1.1}
        position={[0, -1, 0]}
        rotation={[0.1, 0, 0]}
      />
    </Float>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [4, 3, 8],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
        <ambientLight intensity={2.5} />
        <pointLight position={[10, 10, 10]} intensity={3} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <FloatingIsland />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
