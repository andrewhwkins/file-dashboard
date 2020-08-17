import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

const defaultProps = {
    value: 0,
};
/**
 * Factory function to create a shallowWrapper for the LinearProgressWithLabel component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<LinearProgressWithLabel {...defaultProps} {...props} />);
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(
        wrapper,
        "component-linear-progress-with-label"
    );
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(LinearProgressWithLabel, defaultProps);
});
