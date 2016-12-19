import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';

import Application from '../lib/components/Application';

describe('Application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });
});

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });
