import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import snackbarContext from "../../contexts/snackbarContext";

const SnackBar = () => {
    const [snackbar, setSnackbar] = snackbarContext.useSnackbar();

    const handleClose = () => {
        setSnackbar((prevSnackbar) => ({ ...prevSnackbar, isVisible: false }));
    };

    const { severity, isVisible, message } = snackbar;

    return (
        <Snackbar
            open={isVisible}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert elevation={6} severity={severity} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;
