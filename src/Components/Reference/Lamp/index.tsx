import { useRef } from 'react';
import { useGLTF, Text  } from '@react-three/drei';
import { Euler, MathUtils, Mesh } from 'three';

import lampGLB from './glb/lamp.glb';

const ReferenceLamp = () => {
  const { scene }: any = useGLTF(lampGLB, true);
  const lampRef = useRef<Mesh>(null!);
  const rotation = new Euler(0, -MathUtils.degToRad(270), 0);

  const handleClick = () => {
    // Handle click logic here
    window.open('https://www.blenderkit.com/asset-gallery-detail/b727fd78-ec81-4876-8cf2-35c7d17abcef/', '_blank');
  };
  return (
    <group name="lamp">
      <Text
        onClick={handleClick}
        onPointerOver={(event) => event.stopPropagation()} 
        onPointerOut={(event) => event.stopPropagation()} 
        fontSize={.1}
        position={[1.5, 1, -2]}
        rotation={rotation}
>
https://www.blenderkit.com/asset-gallery-detail/b727fd78-ec81-4876-8cf2-35c7d17abcef/      </Text>
      <primitive
      position={[1.5,0,-2]} 
        object={scene}
        ref={lampRef}
        scale={0.7}
      />
    </group>
  );
};

export { ReferenceLamp };
