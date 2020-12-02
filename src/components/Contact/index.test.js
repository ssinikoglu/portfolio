import React from "react";
import Contact from "./index.js";
import renderer from "react-test-renderer";

it("Contact snapshot test ", () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});
