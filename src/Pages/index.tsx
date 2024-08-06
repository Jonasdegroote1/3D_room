import { Navigate, Route, Routes, RoutesProps } from "react-router-dom";

import { NAVIGATION } from "Configs/navigation";
import { InteractiveDioramaPage } from "Pages/InteractiveDioramaPage";
import { ReferencePage } from "Pages/ReferencePage";
/**
 * Router and pages.
 *
 * @param {RoutesProps} props
 * @returns {JSX.Element}
 */
const Pages = (props: RoutesProps): JSX.Element => {
  const allPath = "*";
  const homePath = NAVIGATION.PATH.INTERACTIVE_DIORAMA;
  const rootPath = "/";

  return (
    <Routes {...props}>
      <Route element={<Navigate to={rootPath} />} path={allPath} />
      <Route element={<Navigate to={homePath} />} path={rootPath} />
      <Route
        element={<InteractiveDioramaPage />}
        path={NAVIGATION.PATH.INTERACTIVE_DIORAMA}
      />
      <Route
        element={<ReferencePage />}
        path={NAVIGATION.PATH.REFERNCE}
      />
    </Routes>
  );
};

export { Pages };
