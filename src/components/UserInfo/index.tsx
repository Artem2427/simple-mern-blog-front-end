import React, { FC } from "react";

import useStyles from "./style";

interface Props {
  avatarUrl?: string;
  fullName?: string;
  additionalText?: string;
}

const UserInfo: FC<Props> = ({ avatarUrl, fullName, additionalText }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.avatar}
        src={avatarUrl || "/assets/noavatar.png"}
        alt={fullName}
      />
      <div className={classes.userDetails}>
        <span className={classes.userName}>{fullName}</span>
        <span className={classes.additional}>{additionalText}</span>
      </div>
    </div>
  );
};

export default UserInfo;
