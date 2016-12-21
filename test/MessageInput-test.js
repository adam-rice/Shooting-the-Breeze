/*jshint esversion: 6 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import MessageInput from '../lib/components/MessageInput';

describe('MessageInput', () => {
  it('renders as a <input>', () => {
    const wrapper = shallow(<MessageInput />)
    assert.equal(wrapper.type(), 'input');
  });

  it('calls the setDraftMsg method when altered', () =>{
    let onClick = sinon.spy();
    const wrapper = mount(<MessageInput stateProp={onClick}/>);
    wrapper.find('input').simulate('change');
    wrapper.find('input').simulate('change');
    expect(onClick).to.have.property('callCount',2);
  });

});
