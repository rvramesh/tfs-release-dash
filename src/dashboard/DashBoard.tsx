import React, { useState } from "react";

import EnvironmentNavBar from "./EnvironmentNavBar";

const DashBoard = () => {
  const environments = ["DEV", "SIT", "UAT", "PROD", "BCP"];
  const [currentEnvironment, setCurrentEnvironment] = useState(environments[0]);

  return (
    <React.Fragment>
      <EnvironmentNavBar
        environments={environments}
        selectedEnvironment={currentEnvironment}
        onEnvironmentClick={setCurrentEnvironment}
      ></EnvironmentNavBar>
    </React.Fragment>
  );
};

export default DashBoard;
