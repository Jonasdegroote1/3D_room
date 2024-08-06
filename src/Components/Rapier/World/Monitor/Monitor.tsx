import { useGLTF, useTexture } from '@react-three/drei';
import { Texture, Euler, MathUtils, Mesh, Vector2 } from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

import monitorGLB from './glb/monitor.glb';
import errorGif from './images/minecraft-error-error.gif';

const RapierWorldMonitor = () => {
  const { scene }: any = useGLTF(monitorGLB, true);
  const monitorRef = useRef<Mesh>(null!);
  const rotation = new Euler(0, -MathUtils.degToRad(270), 0);
  const uvGridTexture = useTexture(errorGif) as Texture;
  uvGridTexture.offset = new Vector2(0, 0);
  uvGridTexture.repeat = new Vector2(1, 1);
  const rotationPicture = new Euler(-MathUtils.degToRad(90), -MathUtils.degToRad(282), -MathUtils.degToRad(270));

  const [opacity, setOpacity] = useState(0);

  useFrame((state) => {
    const newOpacity = .5 + .5 * Math.sin(state.clock.elapsedTime);
    setOpacity(newOpacity);
  });

  return (
    <group name="monitor">
      <primitive 
      object={scene} 
      ref={monitorRef} 
      position={[-2, 1.04, 1]} 
      rotation={rotation} 
      scale={1} 
      />
      <mesh 
      position={[-1.98, 1.35, 1]} 
      rotation={rotationPicture} 
      scale={[0.77, 0.45, 2]}>
        <planeGeometry />
        <meshStandardMaterial 
        map={uvGridTexture} 
        transparent opacity={opacity} 
        />
      </mesh>
    </group>
  );
};

export { RapierWorldMonitor };