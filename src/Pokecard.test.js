import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Pokecard from "./Pokecard";

// smoke test
it("renders without crashing", function() {
  shallow(<Pokecard />);
});

// snapshot test
it("matches snapshot", function() {
  let wrapper = shallow(<Pokecard />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
