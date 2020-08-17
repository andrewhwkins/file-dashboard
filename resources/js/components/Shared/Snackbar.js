import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import snackbarContext from "../../contexts/snackbarContext";

/**
 * Functional react component for the snack bar.
 * @function
 * @returns {JSX.Element} - Rendered component
 */
const SnackBar = () => {
    const [snackbar, setSnackbar] = snackbarContext.useSnackbar();

    /**
     * Hide the snackbar from the view.
     * @function
     */
    const handleClose = () => {
        setSnackbar((prevSnackbar) => ({ ...prevSnackbar, isVisible: false }));
    };

    const { severity, isVisible, message } = snackbar;

    return (
        <Snackbar
            open={isVisible}
            autoHideDuration={6000}
            onClose={handleClose}
            data-test="component-snackbar"
        >
            <Alert elevation={6} severity={severity} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;
