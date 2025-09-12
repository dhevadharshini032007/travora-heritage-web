import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { HeritageStructure } from "./HeritageStructure";

interface HeritageModel3DProps {
  siteName: string;
}

export const HeritageModel3D = ({ siteName }: HeritageModel3DProps) => {
  return (
    <div className="w-full h-full">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} />
        
        {/* Environment for reflections */}
        <Environment preset="sunset" />
        
        <Suspense fallback={null}>
          <HeritageStructure siteName={siteName} />
        </Suspense>
        
        {/* Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={50}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};