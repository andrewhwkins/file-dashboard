import React from "react";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";

/**
 * Functional react component for file upload errors (or null if no errors).
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const FileUploadErrors = ({ errors }) => {
    const renderErrors = errors.map((error) => (
        <ListItem key={error}>
            <Alert severity="error">{error}</Alert>
        </ListItem>
    ));
    return errors && errors.length > 0 ? (
        <div data-test="component-file-upload-errors">
            <Box pt={1} pb={1}>
                <Typography variant="h5" component="h3">
                    The following errors occurred during upload
                </Typography>
                <List>{renderErrors}</List>
            </Box>
        </div>
    ) : null;
};

FileUploadErrors.defaultProps = {
    errors: [],
};

FileUploadErrors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
};

export default FileUploadErrors;
