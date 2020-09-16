import React, { useEffect, useState } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Firebase from "../firebase";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Hello {Firebase.getCurrentUsername()}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={logout}
          className={classes.submit}
        >
          Logout
        </Button>
      </Paper>
    </main>
  );

  async function logout() {
    await Firebase.logout();
  }
}

export default Dashboard;
