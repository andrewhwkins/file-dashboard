import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import List from "@material-ui/core/List";
import FileItem from "./FileItem";
import { Loader } from "../Shared";
import "../../actions/hookActions";

/**
 * Component style configuration.
 * @function
 */
const styles = (theme) => ({
    header: {
        margin: theme.spacing(2, 0, 2),
    },
});

/**
 * Functional react component for the file archive.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const FileArchive = ({ onDelete, isLoading, files, onView }) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    if (isLoading) return <Loader />;

    const fileItems = files.map(({ file_slug: fileSlug, ...file }, i) => (
        <FileItem
            key={fileSlug}
            isLast={i === files.length - 1}
            onDelete={() => onDelete(i, fileSlug)}
            onView={() => onView(fileSlug)}
            {...file}
        />
    ));

    return (
        <div data-test="component-file-archive">
            <Typography variant="h4" component="h2" className={classes.header}>
                Files
            </Typography>

            <div>
                {files.length > 0 ? (
                    <List>{fileItems}</List>
                ) : (
                    <Alert severity="info">No files found.</Alert>
                )}
            </div>
        </div>
    );
};

FileArchive.defaultProps = {
    isLoading: false,
};

FileArchive.propTypes = {
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    onView: PropTypes.func.isRequired,
};

export default FileArchive;
