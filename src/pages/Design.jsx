import React from "react";
import { useParams } from "react-router-dom";
import Checkmate from "../component/Checkmate";
import Drive9ja from "../component/Drive9ja";
import NotFound from "../pages/NotFound";
import imagies from "../component/imagies";
const projectMap = {
  checkmate: Checkmate,
  drive9ja: Drive9ja,
};

const Design = () => {
  const { id } = useParams();
  const ProjectComponent = projectMap[id];

  return (
    <div className="min-h-screen py-20 text-white">
      {ProjectComponent ? <ProjectComponent /> : <NotFound />}
    </div>
  );
};

export default Design;
