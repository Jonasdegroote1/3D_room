import { GroupProps } from "@react-three/fiber";
import { SceneRapierLayout as Layout } from "Layouts/SceneRapierLayout";
import { Reference } from "Components/Reference";

/**
 * Page for Interactive Diorama.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const ReferencePage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Reference />
    </Layout>
  );
};

export { ReferencePage };
