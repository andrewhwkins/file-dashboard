import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Loader } from "../Shared";
import DialogWrapper from "../Shared/DialogWrapper";
import FileTags from "./FileTags";
import FileInfo from "./FileInfo";

/**
 * Component style configuration.
 * @function
 */
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
        margin: theme.spacing(1),
    },
    loader: {
        maxWidth: "100%",
        width: "600px",
    },
    modalTitle: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        paddingRight: "40px",
        maxWidth: "100%",
        overflow: "hidden",
        padding: theme.spacing(1),
        textTransform: "uppercase",
    },
});

/**
 * Functional react component for the file info pop up.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */

const FilePopup = ({ isOpen, file, onClose, isLoading }) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    if (!file || isLoading)
        return (
            <DialogWrapper isOpen={isOpen} onClose={onClose}>
                <Loader className={classes.loader} />
            </DialogWrapper>
        );

    return (
        <div data-test="component-file-popup">
            <DialogWrapper isOpen={isOpen} onClose={onClose}>
                <>
                    <MuiDialogTitle disableTypography className={classes.root}>
                        <Typography variant="h6" className={classes.modalTitle}>
                            {file.file_name}
                        </Typography>
                        {onClose ? (
                            <IconButton
                                aria-label="close"
                                className={classes.closeButton}
                                onClick={onClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        ) : null}
                    </MuiDialogTitle>
                    <MuiDialogContent>
                        <>
                            <FileInfo file={file} />
                            <FileTags file={file} tags={file.TagSet} />
                        </>
                    </MuiDialogContent>
                </>
            </DialogWrapper>
        </div>
    );
};

FilePopup.defaultProps = {
    isOpen: false,
    isLoading: false,
};

FilePopup.propTypes = {
    isOpen: PropTypes.bool,
    file: PropTypes.objectOf(PropTypes.any),
    onClose: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

export default FilePopup;
