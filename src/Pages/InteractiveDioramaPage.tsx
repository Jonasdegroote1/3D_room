import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Components/Rapier/World";
import { SceneRapierLayout as Layout } from "Layouts/SceneRapierLayout";

/**
 * Page for Interactive Diorama.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const InteractiveDioramaPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
    </Layout>
  );
};

export { InteractiveDioramaPage };
