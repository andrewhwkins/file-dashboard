import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const LinearProgressWithLabel = ({ value }) => (
    <Box display="flex" alignItems="center" p={1}>
        <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={value} />
        </Box>
        <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${Math.round(
                value
            )}%`}</Typography>
        </Box>
    </Box>
);

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

export default LinearProgressWithLabel;
