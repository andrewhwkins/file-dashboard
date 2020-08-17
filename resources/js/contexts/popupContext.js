import React from "react";

const popupContext = React.createContext();

/**
 * @function usePopup
 * @returns {array} popupContext value, which is a state of [value, setter].
 */
const usePopup = () => {
    const context = React.useContext(popupContext);

    if (!context) {
        throw new Error("usePopup must be used within a PopupProvider");
    }

    return context;
};

/**
 * @function PopupProvider
 * @param {object} props - props to pass through from declared component
 * @returns {JSX.Element} Provider component
 */
const PopupProvider = props => {
    const [popup, setPopup] = React.useState({
        isVisible: false,
        message: "",
        severity: "info"
    });

    const value = React.useMemo(() => [popup, setPopup], [popup]);

    return <popupContext.Provider value={value} {...props} />;
};

export default { PopupProvider, usePopup };
