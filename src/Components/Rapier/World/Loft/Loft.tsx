import { useGLTF } from '@react-three/drei';
import {  Euler, Mesh } from 'three';
import {  useRef } from 'react';

import loftGLB from './glb/loft.glb';

const RapierWorldLoftDecoration = () => {
  const {scene}: any = useGLTF(loftGLB, true);
  const loftDecorationRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,0, 0);

return(
  <group name="loftDecoration">
      <primitive 
      object={scene} 
      ref={loftDecorationRef} 
      position={[-1.53,1.,-.25]} 
      rotation={rotation} 
      scale={.04}
      />
  </group>
)

};

export { RapierWorldLoftDecoration }