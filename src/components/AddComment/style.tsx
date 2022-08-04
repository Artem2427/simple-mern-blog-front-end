import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    marginTop: "10px",
    paddingBottom: "20px",
    marginRight: "20px",
    marginLeft: "17px",
  },

  avatar: {
    marginRight: "15px",
  },

  form: {
    width: "100%",

    "& button": {
      marginTop: "10px",
    },
  },
});

export default useStyles;
