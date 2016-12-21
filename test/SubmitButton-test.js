/*jshint esversion: 6 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import SubmitButton from '../lib/components/SubmitButton';
describe('SubmitButton', () => {
  it('renders as an <input>', () => {
    const wrapper = shallow(<SubmitButton draftMessageProp={''}/>)
    assert.equal(wrapper.type(), 'input');
  });

  it('submits message from the message input on click', () =>{
    let onClick = sinon.spy();
    const wrapper = mount(<SubmitButton draftMessageProp={'Z'} addMessageFunction={onClick}/>);
    wrapper.find('input').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });

});
