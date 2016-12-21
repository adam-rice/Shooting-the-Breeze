/*jshint esversion: 6 */
import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
import { map } from 'lodash';

import Messages from '../lib/components/Messages';

describe('Messages', ()=> {
  it('renders as a <ul>', ()=> {
    const wrapper = shallow(<Messages messages={[]}/>)
    assert.equal(wrapper.type(), 'ul');
  });

});
