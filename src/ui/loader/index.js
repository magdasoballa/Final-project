import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Loader = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className="loader-background">
      <div className="loader-circular-wrapper">
        <CircularProgress size={80}/>
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
