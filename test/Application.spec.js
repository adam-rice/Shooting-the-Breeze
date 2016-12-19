import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../lib/components/Application';
import FilterInput from '../lib/components/FilterInput';
import Sort from '../lib/components/Sort';
import Messages from '../lib/components/Messages';

describe('Application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });
});

describe('<Application />', () => {
  it('renders one <FilterInput /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(FilterInput)).to.have.length(1);
  });
});

describe('<Application />', () => {
  it('renders one <Messages /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Messages)).to.have.length(1);
  });
});

describe('<Application />', () => {
  it('renders one <Sort /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Sort)).to.have.length(1);
  });
});
