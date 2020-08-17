import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
    progress: {
        margin: theme.spacing(2),
    },
});

const Loader = (props) => {
    const { classes, className } = props;

    return (
        <Box
            display="flex"
            className={className}
            justifyContent="center"
            alignContent="center"
        >
            <CircularProgress
                className={classnames(classes.progress, className)}
            />
        </Box>
    );
};

Loader.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    className: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(Loader);
