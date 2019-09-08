import React from "react";
import { Button, makeStyles, Theme, createStyles } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    }
  })
);

const EnvironmentNavBar: React.FC<{
  environments: string[];
  selectedEnvironment: string;
  onEnvironmentClick: (arg0: string) => void;
}> = ({ environments, selectedEnvironment, onEnvironmentClick }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {environments.map(env => {
        return (
          <Button
            color={env === selectedEnvironment ? "secondary" : "primary"}
            onClick={() => onEnvironmentClick(env)}
            className={classes.button}
            key={env}
          >
            {env}
          </Button>
        );
      })}
      <Divider />
    </React.Fragment>
  );
};

export default EnvironmentNavBar;
