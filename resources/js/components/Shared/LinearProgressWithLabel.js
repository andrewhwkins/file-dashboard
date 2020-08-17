import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

/**
 * Functional react component for the progress bar.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const LinearProgressWithLabel = ({ value }) => (
    <div data-test="component-linear-progress-with-label">
        <Box display="flex" alignItems="center" p={1}>
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={value} />
            </Box>
            <Box minWidth={35}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    </div>
);

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default LinearProgressWithLabel;
