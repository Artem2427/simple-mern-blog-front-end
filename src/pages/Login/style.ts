import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "400px",
    padding: "50px",
    border: "1px solid #dedede",
    margin: "50px auto",
  },

  field: {
    marginBottom: "20px !important",
  },

  title: {
    textAlign: "center !important",
    fontWeight: "bold !important",
    marginBottom: "30px !important",
  },
});

export default useStyles;
