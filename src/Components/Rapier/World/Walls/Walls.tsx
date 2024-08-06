import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';
import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';

import wallGLB from './glb/wall.glb';

const RapierWorldWalls = () => {
  const { scene }: any = useGLTF(wallGLB, true);
  const wallRef = useRef<Mesh>(null!);

  // Extract the geometry of the wall
  const geometry = scene.children[0].geometry;

  // Get vertices from the geometry
  const vertices = geometry.attributes.position.array;

  return (
    <group name="Walls">
          <primitive 
          object={scene} 
          ref={wallRef} 
          position={[0, 2.5, 2.4]}
           />
    </group>
  );
};

export { RapierWorldWalls };
