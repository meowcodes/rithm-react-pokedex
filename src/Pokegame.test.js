import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Pokegame from "./Pokegame";

// smoke test
it("renders without crashing", function() {
  shallow(<Pokegame />);
  mount(<Pokegame />)
});

// snapshot test
it("matches snapshot", function() {
  let wrapper = shallow(<Pokegame pokemon={[{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }]} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});