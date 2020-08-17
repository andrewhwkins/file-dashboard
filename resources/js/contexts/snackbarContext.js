import React from "react";

const snackbarContext = React.createContext();

/**
 * @function useSnackbar
 * @returns {array} snackbarContext value, which is a state of [value, setter].
 */
const useSnackbar = () => {
    const context = React.useContext(snackbarContext);

    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }

    return context;
};

/**
 * @function SnackbarProvider
 * @param {object} props - props to pass through from declared component
 * @returns {JSX.Element} Provider component
 */
const SnackbarProvider = props => {
    const [snackbar, setSnackbar] = React.useState({
        isVisible: false,
        message: "",
        severity: "info"
    });

    const value = React.useMemo(() => [snackbar, setSnackbar], [snackbar]);

    return <snackbarContext.Provider value={value} {...props} />;
};

export default { SnackbarProvider, useSnackbar };
