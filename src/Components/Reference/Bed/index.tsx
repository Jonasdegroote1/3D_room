import { Text, useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import bedGLB from './glb/bed.glb';

const ReferenceBed = () => {
  const {scene}: any = useGLTF(bedGLB, true);
  const bedRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(180), 0);
  const secondRotation = new Euler( 0,-MathUtils.degToRad(270), 0);

  const handleClick = () => {
    // Handle click logic here
    window.open('https://blenderkit.com/asset-gallery-detail/9baa9480-d651-4a99-9ea4-ac256ab4a6d7/', '_blank');
  };

return(
  <group name="bed">
    <Text       
      onClick={handleClick}
      onPointerOver={(event) => event.stopPropagation()} 
      onPointerOut={(event) => event.stopPropagation()} 
      position={[1.5,-.5,.8]} 
      rotation={secondRotation} 
      fontSize={.1}>
https://blenderkit.com/asset-gallery-detail/9baa9480-d651-4a99-9ea4-ac256ab4a6d7/
    </Text>
      <primitive 
      object={scene} 
      ref={bedRef} 
      position={[1.5,0,.8]} 
      rotation={rotation} 
      scale={1.5}/>
  </group>
)

};

export { ReferenceBed }