import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Resize, Center, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/macbook_laptop/scene.gltf");

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
      <Center>
        <Resize scale={isMobile ? 2 : 4.5}>
          <primitive object={scene} rotation={[0.05, -0.3, 0]} />
        </Resize>
      </Center>
    </Float>
  );
};

const ComputersCanvas = ({ isMobile }) => {
  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.2, 4.5], fov: 42 }}
      gl={{ preserveDrawingBuffer: true, alpha: true, antialias: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);  // fully transparent background
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          // Only restrict vertical rotation — prevents going upside-down
          // Allow full horizontal (azimuth) rotation — no minAzimuthAngle/maxAzimuthAngle
          maxPolarAngle={Math.PI * 0.72}   // ~130°: can tilt down a bit but not flip
          minPolarAngle={Math.PI * 0.15}   // ~27°: can tilt up a bit but not go under floor
          autoRotate
          autoRotateSpeed={0.6}
        />

        {/* Bright studio lighting */}
        <hemisphereLight intensity={2.5} skyColor="#ffffff" groundColor="#FFE4EC" />
        <ambientLight intensity={1.5} />
        <directionalLight position={[8, 12, 8]} intensity={3} color="#ffffff" castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#FFE4EC" />
        <spotLight position={[0, 10, 5]} intensity={2} color="#FFD700" angle={0.3} />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
