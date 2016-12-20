import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../lib/components/Application';
import FilterInput from '../lib/components/FilterInput';
import Sort from '../lib/components/Sort';
import Messages from '../lib/components/Messages';
import Users from '../lib/components/Users';
import EnterLeave from '../lib/components/EnterLeave';

describe('Application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });

  it('should have a prop of title', () => {
    const title = 'test title';
    const wrapper = shallow(<Application title={title}/>);
    expect(wrapper.contains(title)).to.equal(true);
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

  it('renders one <EnterLeave /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(EnterLeave)).to.have.length(1);
  });

  it('renders one h1 element', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Application.prototype, 'componentDidMount');
    const wrapper = mount(<Application />);
    expect(Application.prototype.componentDidMount.calledOnce).to.equal(true);
   });

});
