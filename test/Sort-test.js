/*jshint esversion: 6 */
import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';

import Sort from '../lib/components/Sort';

describe('Sort', ()=> {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Sort toggle={() => {console.log('I love React!')}} />)
    assert.equal(wrapper.type(), 'section');
  });

  it('renders two buttons', () => {
    const wrapper = shallow(<Sort toggle={() => {console.log('I love React!')}} />)
    const buttons = wrapper.find('input');
    expect(buttons.length).to.equal(2);
  });

});
