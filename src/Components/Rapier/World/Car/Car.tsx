import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useEffect, useRef, useState } from 'react';
import { GroupProps } from '@react-three/fiber';
import { gsap } from 'gsap';

import autoGLB from './glb/car.glb';

const RapierWorldAuto = (props: GroupProps) => {
  const {scene}: any = useGLTF(autoGLB, true);

  const autoRef = useRef<Mesh>(null!);
 const rotation = new Euler( 0,-MathUtils.degToRad(90), 0);

 const [carMoving, setCarMoving] = useState(true);

  const clickHandler = () => {
    setCarMoving((carMove) => !carMove);
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
    gsap.to(autoRef.current.position, {
      duration: 4,
      delay: 0.1, // introduce a delay
      z: carMoving ? 1.4 : -1.6,
      ease: 'power4.inOut',
    });
  }, [carMoving])


return(
  <group name="Car">
    <primitive 
    onClick={clickHandler}
    onPointerOut={pointerOutHandler}
    onPointerOver={pointerOverHandler}
    object={scene} 
    ref={autoRef} 
    scale={0.04} 
    rotation={rotation }
    position={[-2.37,1.32,1.4]} 
    />
    </group>
)

};

export { RapierWorldAuto}

