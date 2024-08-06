import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import shuttleGLB from './glb/shutle.glb';

const ReferenceBadmintonShuttle = () => {
  const {scene}: any = useGLTF(shuttleGLB, true);
  const shuttleRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(270), 0);

return(
  <group name="shuttle">
      <primitive 
      object={scene} 
      ref={shuttleRef} 
      position={[1.5,0,-2]} 
      rotation={rotation} 
      scale={1}/>
  </group>
)

};

export { ReferenceBadmintonShuttle }