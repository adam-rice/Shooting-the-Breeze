import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import MessageInput from '../lib/components/MessageInput';

describe('MessageInput', () => {
  it('renders as a <input>', () => {
    const wrapper = shallow(<MessageInput />)
    assert.equal(wrapper.type(), 'input');
  });

});
