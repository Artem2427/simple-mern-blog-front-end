import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  title: {
    "& input": {
      fontSize: "42px",
      fontWeight: "900",
    },

    "& div": {
      "&  &:before, &:after": {
        display: "none",
      },
    },
  },

  image: {
    width: "100%",
  },

  tags: {
    margin: "15px 0",
  },

  editor: {
    margin: "30px -30px",

    "&:global": {
      "& .cm-s-easymde": {
        border: "0",
        fontSize: "22px",
      },
      "& .editor-toolbar": {
        border: "0",
        backgroundColor: "rgb(0 0 0 / 2%)",
      },
    },
  },

  buttons: {
    display: "flex",

    "& button": {
      marginRight: "15px",
    },
  },
});

export default useStyles;
