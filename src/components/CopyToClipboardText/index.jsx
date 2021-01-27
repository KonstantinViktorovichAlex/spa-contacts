import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  icon: {
    marginRight: "10px",
  },
});

export const CopyToClipboardText = ({ text }) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <FileCopyIcon fontSize="small" className={classes.icon} />
      {text}
    </Box>
  );
};

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
