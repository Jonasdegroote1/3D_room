import { useGLTF,Text } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import chairGLB from './glb/chair.glb';

const ReferenceChair = () => {
  const {scene}: any = useGLTF(chairGLB, true);
  const chairRef = useRef<Mesh>(null!);
  const rotation = new Euler(0, MathUtils.degToRad(90), 0);

  const handleClick = () => {
    // Handle click logic here
    window.open('https://www.blenderkit.com/asset-gallery-detail/9a12cf64-63da-4b65-9368-777bf8bddc33', '_blank');
  };
return(
  <group name="Chair">
    <Text 
    onClick={handleClick}
    onPointerOver={(event) => event.stopPropagation()} 
    onPointerOut={(event) => event.stopPropagation()}      
    rotation={rotation} 
    position={[1.5,2,-6]} 
    fontSize={0.1}
>
https://www.blenderkit.com/asset-gallery-detail/9a12cf64-63da-4b65-9368-777bf8bddc33/    </Text>
      <primitive 
      rotation={rotation}
      object={scene} 
      ref={chairRef}  
      position={[1.5,0,-6]} 
      scale={1.2} 
      />
  </group>
)

};

export { ReferenceChair }