import React, { useState } from "react";

import EnvironmentNavBar from "./EnvironmentNavBar";
import TFSApi from "./TFSApi";
import {
  createStyles,
  makeStyles,
  Theme,
  CircularProgress,
  Divider,
  Container
} from "@material-ui/core";
import ReleaseTable from "./ReleaseTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2)
    },
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
);

const DashBoard = () => {
  const classes = useStyles();

  const environments = ["DEV", "SIT", "UAT", "PROD", "BCP"];
  const [currentEnvironment, setCurrentEnvironment] = useState(environments[0]);
  const [{ data, loading, error }] = TFSApi.useReleaseData(
    currentEnvironment
  );
  let content: JSX.Element;
  if (loading) {
    content = <CircularProgress className={classes.progress} />;
  } else if (error) {
    content = <p>Error!!!</p>;
  } else {
    content = <ReleaseTable data={data}></ReleaseTable>;
  }

  return (
    <React.Fragment>
      <EnvironmentNavBar
        environments={environments}
        selectedEnvironment={currentEnvironment}
        onEnvironmentClick={setCurrentEnvironment}
      ></EnvironmentNavBar>
      <Divider />
      <Container className={classes.container}>{content}</Container>
    </React.Fragment>
  );
};

export default DashBoard;
