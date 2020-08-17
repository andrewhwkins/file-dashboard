import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import FileUploadItem from "./FileUploadItem";

const defaultProps = {
    onStart: jest.fn(),
    onPause: jest.fn(),
    onDelete: jest.fn(),
};
/**
 * Factory function to create a shallowWrapper for the FileUploadItem component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<FileUploadItem {...defaultProps} {...props} />);
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-file-upload-item");
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(FileUploadItem, defaultProps);
});
