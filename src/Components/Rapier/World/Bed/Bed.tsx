import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import bedGLB from './glb/bed.glb';

const RapierWorldBed = () => {
  const {scene}: any = useGLTF(bedGLB, true);
  const bedRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(180), 0);

return(
  <group name="bed">
      <primitive 
      object={scene} 
      ref={bedRef} 
      position={[1.5,0,.8]} 
      rotation={rotation} 
      scale={1.5}/>
  </group>
)

};

export { RapierWorldBed }