import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { AnimationMixer, Euler, MathUtils, Mesh } from "three";

import animationGlb from "./glb/octopus_animated.glb";

const OctopusAnimation = () => {
  const { animations, scene }: any = useGLTF(animationGlb, true);
  const animationClip = animations[0];
  const animationRef = useRef<Mesh>(null!);
  const mixer = useMemo(
    () => new AnimationMixer(animationClip),
    [animationClip]
  );
  const rotation = new Euler( 0,-MathUtils.degToRad(270), 0);

  useEffect(() => {
    mixer.clipAction(animationClip, animationRef.current).play();
  }, [animationClip, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group name="Animation">
      <primitive 
      object={scene} 
      ref={animationRef} 
      position={[-2,1.04,0]}
      rotation={rotation}
      scale={0.05}
      />
    </group>
  );
};

export { OctopusAnimation };
