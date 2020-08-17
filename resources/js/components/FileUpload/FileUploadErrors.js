import React from "react";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";

const FileUploadErrors = ({ errors }) => {
    const renderErrors = errors.map((error) => (
        <ListItem key={error}>
            <Alert severity="error">{error}</Alert>
        </ListItem>
    ));
    return (
        <Box>
            <Typography variant="h5" component="h3">
                The following errors occurred during upload
            </Typography>
            <List>{renderErrors}</List>
        </Box>
    );
};

FileUploadErrors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
};

export default FileUploadErrors;
