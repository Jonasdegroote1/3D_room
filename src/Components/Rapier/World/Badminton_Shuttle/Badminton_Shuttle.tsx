import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';
import { RigidBody } from '@react-three/rapier';

import shuttleGLB from './glb/shutle.glb';

const RapierWorldBadmintonShuttle = () => {
  const {scene}: any = useGLTF(shuttleGLB, true);
  const shuttleRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(270), 0);

return(
  <group name="shuttle">
    <RigidBody type='dynamic'>
      <primitive 
      object={scene} 
      ref={shuttleRef} 
      position={[-5,3,-5]} 
      rotation={rotation} 
      scale={1}/>
    </RigidBody>
  </group>
)

};

export { RapierWorldBadmintonShuttle }