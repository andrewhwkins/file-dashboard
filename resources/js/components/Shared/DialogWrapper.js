import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";

/**
 * Functional react component for the dialog wrapper.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const DialogWrapper = ({ children, isOpen, onClose }) => (
    <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        fullWidth
        maxWidth="sm"
        scroll="paper"
        data-test="component-dialog-wrapper"
    >
        {children}
    </Dialog>
);

DialogWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
        .isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default DialogWrapper;
