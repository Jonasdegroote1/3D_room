import { useGLTF, Text } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef } from 'react';

import booksGLB from './glb/books.glb';

const ReferenceBooks = () => {
  const {scene}: any = useGLTF(booksGLB, true);
  const booksRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,MathUtils.degToRad(90), 0);


  const handleClick = () => {
    // Handle click logic here
    window.open('https://www.blenderkit.com/asset-gallery-detail/a501a968-4168-4dc8-a3bc-f109f9533a3a/', '_blank');
  };

return(
  <group name="books">
    <Text    
    onClick={handleClick}
    onPointerOver={(event) => event.stopPropagation()} 
    onPointerOut={(event) => event.stopPropagation()}    
    rotation={rotation} 
    position={[1.5,.4,-10]} 
    fontSize={0.1}
>
https://www.blenderkit.com/asset-gallery-detail/a501a968-4168-4dc8-a3bc-f109f9533a3a/
    </Text>
      <primitive 
      object={scene} 
      ref={booksRef} 
      position={[1.5,0,-10]} 
      rotation={rotation} 
      scale={1.5}/>
  </group>
)

};

export { ReferenceBooks }