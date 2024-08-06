import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {   useRef } from 'react';

import plantGLB from './glb/plant.glb';

const ReferencePlant = () => {
  const {scene}: any = useGLTF(plantGLB, true);
  const plantRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(180), 0);



  <group name="Plant">
      <primitive 
      object={scene}
      ref={plantRef} 
      position={[-2,0,-2]} 
      rotation={rotation} 
      scale={1.5}
      />
  </group>


};

export { ReferencePlant }