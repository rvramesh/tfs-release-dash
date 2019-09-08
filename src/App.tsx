import React from "react";
import "./App.css";
//https://github.com/mui-org/material-ui/issues/15528#issuecomment-487849529
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Theme
} from "@material-ui/core";
import DashBoard from "./dashboard/DashBoard";

const useStyles = makeStyles((theme: Theme) => {
  console.log(theme);
  return createStyles({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbar: {
      flexWrap: "wrap"
    },
    toolbarTitle: {
      flexGrow: 1
    }
  });
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline />

      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Quick TFS release dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <DashBoard></DashBoard>
    </div>
  );
};

export default App;
