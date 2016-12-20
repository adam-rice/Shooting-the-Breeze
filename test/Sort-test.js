import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';

import Sort from '../lib/components/Sort';

describe('Sort', ()=> {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Sort toggle={(x) => {console.log(x)}} />)
    assert.equal(wrapper.type(), 'section');
  });

  //

});
