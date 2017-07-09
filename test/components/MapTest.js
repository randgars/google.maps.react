import React from 'react';
import { shallow } from 'enzyme';
import Map from 'components\Map.js';

describe('<Map />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Map />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "map-component"', function () {
      expect(component.hasClass('map-component')).to.equal(true);
    });
  });
});
