import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import moment from "moment-mini";

/**
 * Functional react component for file details displayed in the file pop up.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const FileInfo = ({ file }) => {
    const infoKeys = {
        file_name: "File Name",
        ContentType: "Content Type",
        created_at: "Created At",
        updated_at: "Updated At",
    };

    const formatInfo = (key, value) => {
        if (key === "created_at" || key === "updated_at")
            return moment(value).format("YYYY-MM-DD HH:ss");

        return value;
    };

    const infoPairs = Object.keys(infoKeys).reduce(
        (acc, key) => [
            ...acc,
            infoKeys[key] ? (
                <Grid key={key} item sm={6}>
                    <Typography variant="body1">
                        <strong>{infoKeys[key]}</strong>
                    </Typography>
                    <Typography variant="body1">
                        {formatInfo(key, file[key])}
                    </Typography>
                </Grid>
            ) : null,
        ],
        []
    );

    return (
        <div data-test="component-file-info">
            <Typography variant="h6" component="h3">
                Info
            </Typography>
            <Box py={2}>
                <Grid container spacing={1}>
                    {infoPairs}
                </Grid>
            </Box>
        </div>
    );
};

FileInfo.propTypes = {
    file: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FileInfo;
