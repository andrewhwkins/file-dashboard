import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import Snackbar from "./Snackbar";
import snackbarContext from "../../contexts/snackbarContext";

const defaultProps = {};
/**
 * Factory function to create a shallowWrapper for the Snackbar component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = () => {
    const snackbar = { isVisible: false, message: "", severity: "info" };
    return mount(
        <snackbarContext.SnackbarProvider value={[snackbar, jest.fn()]}>
            <Snackbar snackbar={snackbar} />
        </snackbarContext.SnackbarProvider>
    );
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-snackbar");
    expect(component.length).toBe(2);
});

test("Does not throw warning for expected props", () => {
    checkProps(Snackbar, defaultProps);
});
