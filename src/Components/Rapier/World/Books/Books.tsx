import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import booksGLB from './glb/books.glb';

const RapierWorldBooks = () => {
  const {scene}: any = useGLTF(booksGLB, true);
  const booksRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(90), 0);

return(
  <group name="books">
      <primitive 
      object={scene} 
      ref={booksRef} 
      position={[-.065,2.4,1.9]} 
      rotation={rotation} 
      scale={1.5}/>
  </group>
)

};

export { RapierWorldBooks }