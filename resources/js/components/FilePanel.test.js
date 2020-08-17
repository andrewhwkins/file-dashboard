import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import FilePanel from "./FilePanel";
import snackbarContext from "../contexts/snackbarContext";

const defaultProps = {};
/**
 * Factory function to create a shallowWrapper for the FilePanel component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    const snackbar = { isVisible: false, message: "", severity: "info" };
    return mount(
        <snackbarContext.SnackbarProvider value={[snackbar, jest.fn()]}>
            <FilePanel {...props} />
        </snackbarContext.SnackbarProvider>
    );
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-file-panel");
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(FilePanel, defaultProps);
});
