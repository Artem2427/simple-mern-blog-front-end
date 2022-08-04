import { createUseStyles } from "react-jss";
import { PALITRA } from "../../utils/common";

const useStyles = createUseStyles({
  root: {
    backgroundColor: PALITRA.white,
    border: `1px solid ${PALITRA.borderWhite}`,
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "15px",
    position: "relative",

    "&:hover": {
      border: `1px solid ${PALITRA.blue}`,
      boxShadow: `0 0 0 1px ${PALITRA.blue}`,

      "& .buttons": {
        opacity: "1",
      },
    },
  },
  rootFull: {
    "&:hover": {
      backgroundColor: PALITRA.white,
      border: `1px solid #dedede`,
      boxShadow: "none",
    },
  },

  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },

  imageFull: {
    minHeight: "300px",
    height: "100%",
  },

  wrapper: {
    padding: "10px 20px 20px",
  },

  content: {
    margin: "30px 0 50px",

    "& p": {
      fontSize: "22px",
      lineHeight: "36px",
    },
  },

  indention: {
    paddingLeft: "40px",
  },

  title: {
    fontSize: "28px",
    margin: "0",

    "& a": {
      textDecoration: "none",
      color: PALITRA.black,

      "&:hover": {
        color: PALITRA.blue,
      },
    },
  },

  titleFull: {
    fontSize: "42px",
    fontWeight: "900",
  },

  tags: {
    listStyle: "none",
    padding: "0",
    margin: "5px 0 0 0",

    "& li": {
      display: "inline-block",
      fontSize: "14px",
      marginRight: "15px",
      opacity: "0.5",

      "&:hover": {
        opacity: "1",
      },

      "& a": {
        textDecoration: "none",
        color: PALITRA.black,
      },
    },
  },

  postDetails: {
    listStyle: "none",
    padding: "0",
    margin: "20px 0 0 0",

    "& li": {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "14px",
      marginRight: "20px",
      opacity: "0.5",

      "& svg": {
        fontSize: "18px",
        marginRight: "5px",
      },
    },
  },

  skeleton: {
    backgroundColor: PALITRA.white,
    border: `1px solid ${PALITRA.borderWhite}`,
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "15px",

    "& .skeletonUserDetails": {
      display: "flex",
      flexDirection: "column",
    },

    "& .skeletonTags": {
      display: "flex",

      "& span": {
        marginRight: "15px",
      },
    },
  },

  editButtons: {
    position: "absolute",
    right: "15px",
    top: "15px",
    backgroundColor: PALITRA.white,
    borderRadius: "10px",
    opacity: "0",
    transition: "all 0.15s ease-in-out",
  },
});

export default useStyles;
