import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface HeritageStructureProps {
  siteName: string;
}

export const HeritageStructure = ({ siteName }: HeritageStructureProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Different 3D models based on the site name
  const renderModel = () => {
    switch (siteName) {
      case "Brihadeeswarar Temple":
        return (
          <group ref={groupRef}>
            {/* Temple Base */}
            <Box args={[8, 1, 8]} position={[0, -0.5, 0]}>
              <meshStandardMaterial color="#D2691E" />
            </Box>
            
            {/* Main Temple Structure */}
            <Box args={[6, 4, 6]} position={[0, 2, 0]}>
              <meshStandardMaterial color="#CD853F" />
            </Box>
            
            {/* Temple Tower (Vimana) */}
            <Cylinder args={[2, 3, 8, 8]} position={[0, 6, 0]}>
              <meshStandardMaterial color="#B8860B" />
            </Cylinder>
            
            {/* Tower Top */}
            <Sphere args={[1]} position={[0, 10.5, 0]}>
              <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
            </Sphere>
            
            {/* Pillars */}
            {[-2, 2].map((x, i) => (
              <Cylinder key={i} args={[0.3, 0.3, 3]} position={[x, 1.5, 3]}>
                <meshStandardMaterial color="#8B4513" />
              </Cylinder>
            ))}
          </group>
        );
        
      case "Konark Sun Temple":
        return (
          <group ref={groupRef}>
            {/* Main Temple Base */}
            <Box args={[10, 2, 6]} position={[0, 1, 0]}>
              <meshStandardMaterial color="#CD853F" />
            </Box>
            
            {/* Chariot Wheels */}
            {[-3, -1, 1, 3].map((z, i) => (
              <Cylinder key={i} args={[1.5, 1.5, 0.3]} position={[-5, 1, z]} rotation={[0, 0, Math.PI/2]}>
                <meshStandardMaterial color="#8B4513" />
              </Cylinder>
            ))}
            
            {/* Temple Main Structure */}
            <Box args={[6, 6, 4]} position={[0, 4, 0]}>
              <meshStandardMaterial color="#DEB887" />
            </Box>
            
            {/* Tower */}
            <Cylinder args={[1.5, 2, 4, 8]} position={[0, 8, 0]}>
              <meshStandardMaterial color="#B8860B" />
            </Cylinder>
            
            {/* Sun Symbol on Top */}
            <Sphere args={[0.8]} position={[0, 10.5, 0]}>
              <meshStandardMaterial color="#FFD700" emissive="#FFA500" emissiveIntensity={0.3} />
            </Sphere>
          </group>
        );
        
      case "Khajuraho Temples":
        return (
          <group ref={groupRef}>
            {/* Multiple Temple Structures */}
            {[0, 4, -4].map((x, i) => (
              <group key={i} position={[x, 0, 0]}>
                {/* Base */}
                <Box args={[3, 1, 3]} position={[0, 0.5, 0]}>
                  <meshStandardMaterial color="#CD853F" />
                </Box>
                
                {/* Main Structure */}
                <Box args={[2.5, 3, 2.5]} position={[0, 2.5, 0]}>
                  <meshStandardMaterial color="#DEB887" />
                </Box>
                
                {/* Spire */}
                <Cylinder args={[0.8, 1.2, 4, 8]} position={[0, 5.5, 0]}>
                  <meshStandardMaterial color="#B8860B" />
                </Cylinder>
                
                {/* Top */}
                <Sphere args={[0.5]} position={[0, 7.8, 0]}>
                  <meshStandardMaterial color="#FFD700" metalness={0.8} />
                </Sphere>
              </group>
            ))}
          </group>
        );
        
      case "Somnath Temple":
        return (
          <group ref={groupRef}>
            {/* Temple Base */}
            <Cylinder args={[5, 5, 2]} position={[0, 1, 0]}>
              <meshStandardMaterial color="#F5F5DC" />
            </Cylinder>
            
            {/* Main Temple */}
            <Cylinder args={[3, 4, 6]} position={[0, 4, 0]}>
              <meshStandardMaterial color="#FFFACD" />
            </Cylinder>
            
            {/* Dome */}
            <Sphere args={[2.5]} position={[0, 8, 0]} scale={[1, 0.8, 1]}>
              <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
            </Sphere>
            
            {/* Spire */}
            <Cylinder args={[0.3, 0.5, 3]} position={[0, 10.5, 0]}>
              <meshStandardMaterial color="#FFD700" metalness={1} />
            </Cylinder>
            
            {/* Flag */}
            <Box args={[1, 0.7, 0.1]} position={[0, 12.5, 0]}>
              <meshStandardMaterial color="#FF6347" />
            </Box>
            
            {/* Ocean Base */}
            <Box args={[20, 0.5, 20]} position={[0, -0.25, 0]}>
              <meshStandardMaterial color="#4682B4" transparent opacity={0.7} />
            </Box>
          </group>
        );
        
      default:
        return (
          <group ref={groupRef}>
            {/* Generic Heritage Structure */}
            <Box args={[6, 3, 6]} position={[0, 1.5, 0]}>
              <meshStandardMaterial color="#CD853F" />
            </Box>
            <Cylinder args={[2, 2.5, 5]} position={[0, 5, 0]}>
              <meshStandardMaterial color="#B8860B" />
            </Cylinder>
            <Sphere args={[1]} position={[0, 8, 0]}>
              <meshStandardMaterial color="#FFD700" metalness={0.8} />
            </Sphere>
          </group>
        );
    }
  };

  return (
    <>
      {renderModel()}
      
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#90EE90" transparent opacity={0.3} />
      </mesh>
    </>
  );
};