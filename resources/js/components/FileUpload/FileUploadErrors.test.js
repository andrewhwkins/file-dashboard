import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import FileUploadErrors from "./FileUploadErrors";

const defaultProps = {};
/**
 * Factory function to create a shallowWrapper for the FileUploadErrors component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<FileUploadErrors {...props} />);
};

test("Renders without error", () => {
    const wrapper = setup({ errors: ["Some error"] });
    const component = findByTestAttr(wrapper, "component-file-upload-errors");
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(FileUploadErrors, defaultProps);
});
