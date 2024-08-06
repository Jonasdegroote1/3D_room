import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useEffect, useRef, useState } from 'react';
import { GroupProps, ThreeEvent } from '@react-three/fiber';
import { gsap } from 'gsap';

import posterGLB from './glb/poster.glb';

const RapierWorldPoster = (props: GroupProps) => {
  const {scene}: any = useGLTF(posterGLB, true);

  const posterRef = useRef<Mesh>(null!);
  const rotation = new Euler( -MathUtils.degToRad(90),-MathUtils.degToRad(180), 0);

 const [posterMoving, setPosterMoving] = useState(true);

  const clickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation()
    setPosterMoving((posterMove) => !posterMove);
    console.log("click")
  };

  const pointerOutHandler = () => {
    // Handle pointer out if needed
    document.body.style.cursor = 'auto'; 
  };

  const pointerOverHandler = () => {
    // Handle pointer over if needed
    document.body.style.cursor = 'pointer'; 
  };

useEffect(() => {
    gsap.to(posterRef.current.position, {
      duration: 1,
      delay: 0.1, // introduce a delay
      x: posterMoving ? 1.5 : -1.6,
      ease: 'power4.inOut',
      onComplete: () => {
        console.log("After animation:", posterRef.current.position.x);
      }
    });
  }, [posterMoving])


return(
  <group name="Poster">
    <primitive 
    onClick={clickHandler}
    onPointerOut={pointerOutHandler}
    onPointerOver={pointerOverHandler}
    object={scene} 
    ref={posterRef} 
    rotation={rotation }
      position={[1.5,2.2,2.3]} 
    />
    </group>
)

};

export { RapierWorldPoster}

