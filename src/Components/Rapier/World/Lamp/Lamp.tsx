import { useRef, useState, useEffect } from 'react';
import { useGLTF  } from '@react-three/drei';
import { Mesh, PointLight, Color } from 'three';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { gsap } from "gsap"

import { colorsGenerator } from 'Utils/colour';
import lampGLB from './glb/lamp.glb';

const colors = colorsGenerator();
const initialColor = colors.next().value as string;

const gsapObject = {colorValue: initialColor}


const RapierWorldLamp = () => {
  const { scene }: any = useGLTF(lampGLB, true);
  const lampRef = useRef<Mesh>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  
  const [isLightOn, setLightOn] = useState(false);
  const [color, setColor] = useState(initialColor)

  
  const handleLampClick = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation()
    setLightOn((prevIsLightOn) => !prevIsLightOn);
    const nextColor = colors.next().value as string
    setColor(nextColor)
  };
  
  const pointerOutHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation()
    document.body.style.cursor = 'auto';
  };

  const pointerOverHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation()
    document.body.style.cursor = 'pointer';
  };

  // Animation related state
  const animationTime = useRef(0);

  useFrame(({ clock }) => {
    if (isLightOn) {
      // Animate color change over time
      animationTime.current = clock.elapsedTime;
    }
  });

useEffect(() => {
  const transitionColors = () => {
    const nextColor = colors.next().value as string;

    gsap.to(gsapObject, {
      duration: 1,
      colorValue: nextColor,
      onUpdate: () => {
        const newColor = new Color(gsapObject.colorValue);
        pointLightRef.current.color.copy(newColor);      },
      onComplete: transitionColors, 
    });
  };
  transitionColors();
  
}, [colors]);



  return (
    <group name="lamp">
      <primitive
        onClick={handleLampClick}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        position={[-1.7, 1.04, 1.9]}
        object={scene}
        ref={lampRef}
        scale={0.7}
      />

      <pointLight
        position={[-1.7, 2, 1.9]}
        intensity={isLightOn ? 0.5 : 0}
        ref={pointLightRef}
      />
    </group>
  );
};

export { RapierWorldLamp };
