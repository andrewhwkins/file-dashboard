import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import FilePopup from "./FilePopup";

const defaultProps = {
    isOpen: false,
    onClose: jest.fn(),
    file: {},
};
/**
 * Factory function to create a shallowWrapper for the FilePopup component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<FilePopup {...defaultProps} {...props} />);
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-file-popup");
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(FilePopup, defaultProps);
});
