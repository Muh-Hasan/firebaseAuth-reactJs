import React, { useEffect } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import firebase from "../firebase";
import { useNavigate } from "react-router-dom";

const styles = (theme) => ({
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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function Dashboard(props) {
  const { classes } = props;
  let history = useNavigate();

  useEffect(() => {
    if (
      !firebase.getCurrentUsername() ||
      firebase.getCurrentUsername() === null ||
      undefined
    ) {
      history("/login");
      alert("Please login first");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Hello {firebase.getCurrentUsername()}
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
    await firebase.logout();
    history("/");
  }
}

export default withStyles(styles)(Dashboard);
