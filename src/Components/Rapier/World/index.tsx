import { GroupProps } from "@react-three/fiber";

import { RapierWorldFloor as Floor } from "Components/Rapier/World/Floor/Floor";
import { RapierWorldWalls as Walls } from "Components/Rapier/World/Walls/Walls";
import { RapierWorldChair as Chair } from "Components/Rapier/World/Chair/Chair";
import { RapierWorldDesk as Desk } from "Components/Rapier/World/Desk/Desk";
import { RapierWorldAuto as Auto } from "Components/Rapier/World/Car/Car";
import { RapierWorldCloset as Closet } from "Components/Rapier/World/ClosetBig/Closet";
import { RapierWorldPlant as Plant } from "Components/Rapier/World/Plants/Plants";
import { RapierWorldSmallCloset as Small } from "Components/Rapier/World/ClosetSmall/SmallCloset";
import { RapierWorldBed as Bed } from "Components/Rapier/World/Bed/Bed";
import { RapierWorldPoster as Poster } from "Components/Rapier/World/Poster/Poster";
import { RapierWorldClosetDoor as ClosetDoor } from "Components/Rapier/World/ClosetBig/ClosetDoor";
import { RapierWorldClosetDoor as ClosetDoor2 } from "Components/Rapier/World/ClosetBig/ClosetDoor2";
import { RapierWorldBooks as Books} from "Components/Rapier/World/Books/Books";
import { RapierWorldMonitor as Monitor} from "Components/Rapier/World/Monitor/Monitor";
import { RapierWorldLoftDecoration as Loft } from "Components/Rapier/World/Loft/Loft";
import { RapierWorldLamp as Lamp } from "Components/Rapier/World/Lamp/Lamp";
import { RapierWorldSmallClosetDoor as SmallClosetDoor } from "Components/Rapier/World/ClosetSmall/SmallClosetDoor";
import { OctopusAnimation as Octopus } from "Components/Rapier/World/Octopus_Animated/Octopus_Animation";
import { RapierWorldBadmintonShuttle as Shuttle } from "Components/Rapier/World/Badminton_Shuttle/Badminton_Shuttle";

const RapierWorld = (props: GroupProps) => {
  return (
    <group name="World" rotation={[0,4.75,0]} {...props} >
      <Floor />
      <Walls />
      <Auto />
      <Chair />
      <Desk />
      <Closet />
      <Plant />
      <Small />
      <Bed />
      <Poster /> 
      <ClosetDoor />
      <ClosetDoor2 />
      <Books />
      <Monitor />
      <Loft />
      <Lamp />
      <SmallClosetDoor />
      <Octopus />
      <Shuttle />
    </group>
  );
};

export { RapierWorld };
