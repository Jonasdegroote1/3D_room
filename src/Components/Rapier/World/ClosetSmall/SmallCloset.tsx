import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import closetGLB from './glb/smallCloset.glb';
import { RigidBody } from '@react-three/rapier';

const RapierWorldSmallCloset = () => {
  const {scene}: any = useGLTF(closetGLB, true);
  const closetRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(270), 0);

return(
  <group name="closet">
    <RigidBody type="dynamic">
      <primitive 
      object={scene} 
      ref={closetRef} 
      position={[-1.85,0.5,-0.75]} 
      rotation={rotation} 
      scale={2}/>
    </RigidBody>
  </group>
)

};

export { RapierWorldSmallCloset }