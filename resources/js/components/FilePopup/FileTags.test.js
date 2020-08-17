import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import FileTags from "./FileTags";

const defaultProps = { tags: [], file: {} };
/**
 * Factory function to create a shallowWrapper for the FileTags component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<FileTags {...defaultProps} {...props} />);
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-file-tags");
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(FileTags, defaultProps);
});
