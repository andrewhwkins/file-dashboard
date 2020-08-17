import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import Loader from "./Loader";

const defaultProps = {};
/**
 * Factory function to create a shallowWrapper for the Loader component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<Loader {...props} />);
};

test("Renders without error", () => {
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-loader");
    expect(component.length).toBe(1);
});

test("Does not throw warning for expected props", () => {
    checkProps(Loader, defaultProps);
});
