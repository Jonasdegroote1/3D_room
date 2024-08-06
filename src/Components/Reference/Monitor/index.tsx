import { useGLTF, Text} from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import { useRef } from 'react';

import monitorGLB from './glb/monitor.glb';

const ReferenceMonitor = () => {
  const { scene }: any = useGLTF(monitorGLB, true);
  const monitorRef = useRef<Mesh>(null!);
  const rotation = new Euler(0, -MathUtils.degToRad(270), 0);
  
  const handleClick = () => {
    // Handle click logic here
    window.open('https://blenderkit.com/asset-gallery-detail/9baa9480-d651-4a99-9ea4-ac256ab4a6d7/', '_blank');
  }; 
  const secondHandleClick = () => {
    // Handle click logic here
    window.open('https://www.blenderkit.com/asset-gallery-detail/6bbe84a2-e8f5-43fd-92ed-c5f7ed81f65e/', '_blank');
  };
  return (
    <group name="monitor">
      <Text
        onClick={handleClick}
        onPointerOver={(event) => event.stopPropagation()} 
        onPointerOut={(event) => event.stopPropagation()} 
        fontSize={.1}
        position={[1.5, -.4, -4]}
        rotation={rotation}
>
      https://www.blenderkit.com/asset-gallery-detail/ccdd8cbb-f9b5-427a-819b-e3975f84a35d/
      </Text>
      <Text
        onClick={secondHandleClick}
        onPointerOver={(event) => event.stopPropagation()} 
        onPointerOut={(event) => event.stopPropagation()} 
        fontSize={.1}
        position={[1.5, -.6, -4]}
        rotation={rotation}
>
      https://www.blenderkit.com/asset-gallery-detail/6bbe84a2-e8f5-43fd-92ed-c5f7ed81f65e/
      </Text>
      <primitive 
      object={scene} 
      ref={monitorRef} 
      position={[1.5,0,-4]} 
      rotation={rotation} 
      scale={1} 
      />
    </group>
  );
};

export { ReferenceMonitor };