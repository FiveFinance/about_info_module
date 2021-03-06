import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';

import Collections from '../Collections';

describe('Collection', () => {

  const props = {
    stockInfo: [
      {
        tags:[]
      },
    ],
  };

  test('render', () => {
    const wrapper = shallow(<Collections {...props}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
