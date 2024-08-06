import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useEffect, useRef, useState } from 'react';

import plantGLB from './glb/plant.glb';
import gsap from 'gsap';

const RapierWorldPlant = () => {
  const {scene}: any = useGLTF(plantGLB, true);
  const plantRef = useRef<Mesh>(null!);
  const rotation = new Euler( 0,-MathUtils.degToRad(180), 0);


  const [plantMoving, setPlantMoving] = useState(true);

  const clickHandler = () => {
    setPlantMoving((plantMove) => !plantMove);
  }

  const pointerOutHandler = () => {
    // Handle pointer out if needed
    document.body.style.cursor = 'auto'; 
  }

  const pointerOverHandler = () => {
    // Handle pointer over if needed
    document.body.style.cursor = 'pointer';
  }

  useEffect(() => {
    gsap.to(plantRef.current.position, {
      duration: 4,
      delay: 0.1, // introduce a delay
      x: plantMoving ? -2 : -1.6,
      ease: 'power4.inOut',
    })
  }, [plantMoving]);

return(
  <group name="Plant">
      <primitive 
      onClick={clickHandler}
      onPointerOut={pointerOutHandler}
      onPointerOver={pointerOverHandler}
      object={scene}
      ref={plantRef} 
      position={[-2,0,-2]} 
      rotation={rotation} 
      scale={1.5}
      />
  </group>
)

};

export { RapierWorldPlant }