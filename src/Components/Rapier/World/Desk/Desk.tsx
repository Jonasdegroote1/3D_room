import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import DeskGLB from './glb/desk.glb';

const RapierWorldDesk = () => {
  const {scene}: any = useGLTF(DeskGLB, true);
  const deskRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(90), 0);

return(
  <group name="Desk">
      <primitive 
      object={scene} 
      ref={deskRef} 
      position={[-1.68,0.5,1.47]} 
      rotation={rotation}
      scale={1.25}/>
  </group>
)

};

export { RapierWorldDesk }