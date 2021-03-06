import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import DeleteIcon from "@material-ui/icons/Delete";
import LinearProgressWithLabel from "../Shared/LinearProgressWithLabel";
import theme from "../../theme";

/**
 * Component style configuration.
 * @function
 */
const styles = () => ({
    iconButton: {
        padding: theme.spacing(1),
    },
    itemText: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        maxWidth: "100%",
        display: "block",
        padding: theme.spacing(1),
    },
    buttons: {
        textAlign: "right",
    },
});

/**
 * Functional react component for a file that has been selected.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component (or null if success prop is false)
 */
const FileUploadItem = ({
    name,
    onStart,
    onPause,
    onDelete,
    progress,
    upload,
    status,
}) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <div data-test="component-file-upload-item">
            <Grid
                display="flex"
                container
                justify="space-between"
                pt={1}
                pb={1}
            >
                <Grid sm={4} item>
                    <Typography variant="body1" className={classes.itemText}>
                        {name}
                    </Typography>
                </Grid>
                <Grid sm={4} item>
                    {!!progress && progress > 0 && (
                        <LinearProgressWithLabel value={progress} />
                    )}
                </Grid>
                <Grid sm={4} item className={classes.buttons}>
                    {upload && (
                        <>
                            {(!status || status === "start") && (
                                <IconButton
                                    color="primary"
                                    aria-label="Pause upload"
                                    onClick={onPause}
                                    className={classes.iconButton}
                                >
                                    <PauseCircleFilledIcon />
                                </IconButton>
                            )}
                            {status === "abort" && (
                                <IconButton
                                    color="primary"
                                    aria-label="Continue upload"
                                    onClick={onStart}
                                    className={classes.iconButton}
                                >
                                    <PlayCircleFilledWhiteIcon />
                                </IconButton>
                            )}
                        </>
                    )}
                    {(!upload || status === "abort") && (
                        <IconButton
                            color="primary"
                            aria-label="Delete file"
                            onClick={onDelete}
                            className={classes.iconButton}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}
                </Grid>
            </Grid>
        </div>
    );
};

FileUploadItem.defaultProps = {
    name: "New File",
    progress: 0,
};

FileUploadItem.propTypes = {
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    progress: PropTypes.number,
    name: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    upload: PropTypes.objectOf(PropTypes.any),
    status: PropTypes.string,
};

export default FileUploadItem;
