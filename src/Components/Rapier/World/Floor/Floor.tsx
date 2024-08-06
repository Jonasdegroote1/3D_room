import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";

const PLANE_SIZE = 5;

const RapierWorldFloor = () => {
  const args: [number, number] = [PLANE_SIZE, PLANE_SIZE];
  const rotation = new Euler(-MathUtils.degToRad(90), 0, 0);

  return (
    <RigidBody>
      <Plane args={args} receiveShadow={true} rotation={rotation}>
        <meshStandardMaterial color={0xffffff} />
      </Plane>
    </RigidBody>
  );
};

export { RapierWorldFloor };
