import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import FileItem from "./FileItem";

const defaultProps = {
    onDelete: jest.fn(),
    onView: jest.fn(),
};
/**
 * Factory function to create a shallowWrapper for the FileItem component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<FileItem {...defaultProps} {...props} />);
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-file-item");
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(FileItem, defaultProps);
});
