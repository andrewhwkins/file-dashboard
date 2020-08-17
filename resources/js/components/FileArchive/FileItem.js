import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = () => ({
    itemText: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        maxWidth: "100%",
        display: "block",
    },
});

const FileItem = (props) => {
    const { file_name: fileName, onDelete, isLast, onView, classes } = props;
    return (
        <ListItem divider={!isLast} button onClick={onView}>
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

FileItem.propTypes = {
    file_name: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    isLast: PropTypes.bool,
    onView: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles, { withTheme: true })(FileItem);
