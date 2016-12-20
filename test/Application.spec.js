import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../lib/components/Application';
import FilterInput from '../lib/components/FilterInput';
import Sort from '../lib/components/Sort';
import Messages from '../lib/components/Messages';
import Users from '../lib/components/Users';

describe('Application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });

  it('renders one <FilterInput /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(FilterInput)).to.have.length(1);
  });

  it('renders one <Sort /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Sort)).to.have.length(1);
  });

  it('renders one <Messages /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Messages)).to.have.length(1);
  });

  it('renders one <Users /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Users)).to.have.length(1);
  });

it.skip('should change state if I add ideas to the dom', () => {
    const wrapper = mount(<Main/>);
    const title = wrapper.find('.CreateIdea-title');
    title.simulate('change', title.node.value = 'testing title');

    const body = wrapper.find('.CreateIdea-body');
   body.simulate('change', body.node.value = 'testing body');
   wrapper.find('.CreateIdea-submit').simulate('click');

   expect(wrapper.state().ideas.length).to.equal(1);
   expect(wrapper.state().ideas[0].title).to.equal('testing title');
   expect(wrapper.state().ideas[0].title).to.equal('testing title');
  });

});
