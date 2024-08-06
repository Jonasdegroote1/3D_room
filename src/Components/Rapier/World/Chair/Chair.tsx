import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

import chairGLB from './glb/chair.glb';

const RapierWorldChair = () => {
  const {scene}: any = useGLTF(chairGLB, true);
  const chairRef = useRef<Mesh>(null!);
  const rotation = new Euler(0, MathUtils.degToRad(90), 0);

  const [hover, setHover] = useState(false);


  const pointerOutHandler = () => {
    // Handle pointer out if needed
    setHover(true);
    document.body.style.cursor = 'auto'; 
  };

  const pointerOverHandler = () => {
    // Handle pointer over if needed
    setHover(false);
    document.body.style.cursor = 'pointer'; 
  };

  useEffect(() => {
    gsap.to(chairRef.current.position, {
      duration: 2,
      delay: 0.1, // introduce a delay
      x: hover ? -1.2 : -.9,
      ease: 'power4.inOut',
    });
  }, [hover])


return(
  <group name="Chair">
      <primitive 
      onPointerOut={pointerOutHandler}
      onPointerOver={pointerOverHandler}
      rotation={rotation}
      object={scene} 
      ref={chairRef}  
      position={[-1.2,0.1,.9]} 
      scale={1.2} 
      />
  </group>
)

};

export { RapierWorldChair }