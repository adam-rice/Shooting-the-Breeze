import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';

import CharacterCount from '../lib/components/CharacterCount';

describe('CharacterCount', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<CharacterCount/>)
    assert.equal(wrapper.type(), 'div');
  });

  it.skip('counts the characters of the message field', () => {
    const wrapper = shallow(<CharacterCount draftMessageProp="hello" />)
    expect(wrapper.find('.character-count').text()).to.equal('5');
  });

});
