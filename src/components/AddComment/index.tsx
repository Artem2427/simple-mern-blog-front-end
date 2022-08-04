import React from "react";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import useStyles from "./style";

const Index = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Avatar
          classes={{ root: classes.avatar }}
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <div className={classes.form}>
          <TextField
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  );
};

export default Index;
