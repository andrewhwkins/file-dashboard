import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import FileInfo from "./FileInfo";

const defaultProps = { file: {} };
/**
 * Factory function to create a shallowWrapper for the FileInfo component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<FileInfo {...defaultProps} {...props} />);
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-file-info");
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(FileInfo, defaultProps);
});
