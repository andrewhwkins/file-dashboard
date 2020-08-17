import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";

/**
 * Component style configuration.
 * @function
 */
const styles = () => ({
    itemText: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        maxWidth: "100%",
        display: "block",
    },
});

/**
 * Functional react component for an item in the file archive.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const FileItem = ({ file_name: fileName, onDelete, isLast, onView }) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <ListItem
            divider={!isLast}
            button
            onClick={onView}
            data-test="component-file-item"
        >
            <ListItemAvatar>
                <Avatar>
                    <FileCopyIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={<span className={classes.itemText}>{fileName}</span>}
                secondary="Click to view"
            />
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    color="primary"
                    aria-label="delete"
                    onClick={onDelete}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

FileItem.defaultProps = {
    file_name: "New File",
    isLast: false,
};

FileItem.propTypes = {
    file_name: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    isLast: PropTypes.bool,
    onView: PropTypes.func.isRequired,
};

export default FileItem;
