import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

/**
 * Component style configuration.
 * @function
 */
const styles = (theme) => ({
    progress: {
        margin: theme.spacing(2),
    },
});

/**
 * Functional react component for the spinning loader.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component (or null if success prop is false)
 */
const Loader = ({ className }) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <div data-test="component-loader">
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
        </div>
    );
};

Loader.defaultProps = {
    className: "",
};

Loader.propTypes = {
    className: PropTypes.string,
};

export default Loader;
