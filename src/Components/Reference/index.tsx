import { GroupProps } from "@react-three/fiber";
import { ReferenceBed as Bed } from "Components/Reference/Bed/index";
import { ReferenceLamp as Lamp } from "Components/Reference/Lamp/index";
import { ReferenceMonitor as Monitor } from "Components/Reference/Monitor/index";
import { ReferenceBooks as Books } from "Components/Reference/Books/index";
import { ReferenceChair as Chair } from "Components/Reference/Chair/index";
import { ReferencePlant as Plant } from "Components/Reference/Plants/index";


const Reference = (props: GroupProps) => {
  return (
    <group name="Reference" {...props} >
      <Bed />
      <Lamp />
      <Monitor />
      <Books />
      <Chair />
      {/* <Plant /> */}
    </group>
  );
};

export { Reference };
