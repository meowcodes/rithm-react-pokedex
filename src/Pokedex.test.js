import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Pokedex from "./Pokedex";

// smoke test
it("renders without crashing", function() {
  shallow(<Pokedex />);
  mount(<Pokedex />)
});

// snapshot test
it("matches snapshot", function() {
  let wrapper = shallow(<Pokedex />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

// snapshot test
it("matches snapshot", function() {
  let wrapper = shallow(<Pokedex pokemon={[{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }]} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});