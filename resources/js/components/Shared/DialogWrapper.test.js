import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import DialogWrapper from "./DialogWrapper";

const defaultProps = {
    onClose: jest.fn(),
    isOpen: false,
    children: <div />,
};
/**
 * Factory function to create a shallowWrapper for the DialogWrapper component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return mount(
        <DialogWrapper {...defaultProps} {...props}>
            <div />
        </DialogWrapper>
    );
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-dialog-wrapper");
    expect(component.length).toBe(3);
});

test("Does not throw warning for expected props", () => {
    checkProps(DialogWrapper, defaultProps);
});
