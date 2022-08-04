import { createUseStyles } from "react-jss";
import { PALITRA } from "../../utils/common";

const useStyles = createUseStyles({
  root: {
    backgroundColor: PALITRA.white,
    padding: "10px 0",
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "30px",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    backgroundColor: PALITRA.black,
    color: PALITRA.white,
    fontWeight: "700",
    lineHeight: "35px",
    textTransform: "uppercase",
    letterSpacing: "0.15px",
    borderRadius: "5px",
    padding: "0 10px",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: PALITRA.blue,
    },
  },

  buttons: {
    "& button": {
      marginLeft: "10px",
    },

    "& a": {
      textDecoration: "none",
    },
  },
});

export default useStyles;
