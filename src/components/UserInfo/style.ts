import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },

  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "30px",
    marginRight: "10px",
  },

  userName: {
    fontWeight: "500",
    fontSize: "14px",
  },

  userDetails: {
    display: "flex",
    flexDirection: "column",
  },

  additional: {
    fontSize: "12px",
    opacity: "0.6",
  },
});

export default useStyles;
