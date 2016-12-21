/*jshint esversion: 6 */
import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';

import CharacterCount from '../lib/components/CharacterCount';

describe('CharacterCount', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<CharacterCount/>)
    assert.equal(wrapper.type(), 'div');
  });

  it('decrements from 140 the characters of the message field', () => {
    const wrapper = shallow(<CharacterCount draftMessageProp="hello" />)
    expect(wrapper.find('#char-count').text()).to.equal('135');
  });

});
