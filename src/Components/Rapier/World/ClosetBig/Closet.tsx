import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import closetGLB from './glb/closet.glb';

const RapierWorldCloset = () => {
  const {scene}: any = useGLTF(closetGLB, true);
  const closetRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(180), 0);

return(
  <group name="closet">
      <primitive object={scene} 
      ref={closetRef}  
      position={[-.2,1.3,1.95]} 
      rotation={rotation} 
      scale={1.5}/>
  </group>
)

};

export { RapierWorldCloset }