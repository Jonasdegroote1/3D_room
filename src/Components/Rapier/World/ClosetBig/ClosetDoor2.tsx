import { useGLTF } from '@react-three/drei';
import {  Euler, MathUtils, Mesh } from 'three';
import {  useMemo, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

import closetDoorGLB from './glb/closetdoor2.glb';


const RapierWorldClosetDoor = () => {
  const { scene }: any = useGLTF(closetDoorGLB, true);
  const sceneClone = useMemo(() => scene.clone(true) as never, [scene]);

  const ClosetDoorRef = useRef<Mesh>(null!);
  const secondClosetDoorRef = useRef<Mesh>(null!);
  const rotation = new Euler(-MathUtils.degToRad(90), -MathUtils.degToRad(180), 0);
  const secondRotation = new Euler(-MathUtils.degToRad(90), 0, 0);

  const [isFirstDoorOpen, setFirstDoorOpen] = useState(false);
  const [isSecondDoorOpen, setSecondDoorOpen] = useState(false);

  const clickHandler = (doorIndex: number) => {
    if (doorIndex === 0) {
      setFirstDoorOpen((prevIsOpen) => !prevIsOpen);
      setSecondDoorOpen(false);
    } else if (doorIndex === 1) {
      setFirstDoorOpen(false);
      setSecondDoorOpen((prevIsOpen) => !prevIsOpen);
    }
  };

  const pointerOutHandler = () => {
    // Handle pointer out if needed
    document.body.style.cursor = 'auto'; // Reset cursor style on pointer out
  };

  const pointerOverHandler = (doorIndex: number) => {
    // Handle pointer over if needed
    document.body.style.cursor = 'pointer'; // Change cursor style on pointer over
  };

  useEffect(() => {
    gsap.to(ClosetDoorRef.current.rotation, {
      duration: 1,
      delay: 0.1, // introduce a delay
      z: isFirstDoorOpen ? MathUtils.degToRad(90) : 0,
      ease: 'power2.inOut',
    });
  }, [isFirstDoorOpen]);

  useEffect(() => {
    gsap.to(secondClosetDoorRef.current.rotation, {
      duration: 1,
      delay: 0.1, // introduce a delay
      z: isSecondDoorOpen ? MathUtils.degToRad(90) : 0,
      ease: 'power2.inOut',
    });
  }, [isSecondDoorOpen]);

  return (
    <group name="closetDoor">
      <primitive
        onClick={() => clickHandler(0)}
        onPointerOut={pointerOutHandler}
        onPointerOver={() => pointerOverHandler(0)}
        object={scene}
        rotation={rotation}
        ref={ClosetDoorRef}
        position={[.4,1.64,1.63]}
        scale={1.5}
      />

      <primitive
        onClick={() => clickHandler(1)}
        onPointerOut={pointerOutHandler}
        onPointerOver={() => pointerOverHandler(1)}
        object={sceneClone}
        rotation={secondRotation}
        ref={secondClosetDoorRef}
         position={[-.8,.78,1.63]} 
        scale={1.5}
      />
    </group>
  );
};

export { RapierWorldClosetDoor };