import React from 'react';
import { shallow, mount } from 'enzyme';
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

  it('should have a component that filters messages based on characters in the filter input', ()=> {
    const wrapper = mount(<Application />);
    // const input = wrapper.find('#msg-input');
    const filter = wrapper.find('#filter-input');
    wrapper.setState({user: 'Bilbo'});
    wrapper.setState({messages: [{
      user: {
        displayName: 'Bilbo',
        email: 'theShire@gmail.com',
        uid: '0101'
      },
    content: 'Werewolf from Indiana'},
    {user: {
      displayName: 'Bilbo',
      email: 'theShire@gmail.com',
      uid: '0101'
      },
    content: 'Dracula from Indiana'},
    {user: {
      displayName: 'Bilbo',
      email: 'theShire@gmail.com',
      uid: '0101'
      },
      content: 'Frankenstein'
    }] })
    filter.simulate('change', {target: {value: 'Indiana'}})
    expect(wrapper.state('filterString')).to.equal('Indiana');
    expect(wrapper.state('filteredMessages').length).to.equal(2);
  })

});
