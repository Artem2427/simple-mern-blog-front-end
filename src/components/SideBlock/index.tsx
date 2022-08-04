import React, { FC, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import useStyles from "./style";

interface Props {
  title: string;
  children?: ReactNode;
}

const SideBlock: FC<Props> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Paper classes={{ root: classes.root }}>
      <Typography variant="h6" classes={{ root: classes.title }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default SideBlock;
