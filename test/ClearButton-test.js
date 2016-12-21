/*jshint esversion: 6 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import ClearButton from '../lib/components/ClearButton';

describe('ClearButton', () => {
  it('renders as a <input>', () => {
    const wrapper = shallow(<ClearButton />)
    assert.equal(wrapper.type(), 'input');
  });

  it('can be clicked', () =>{
    let onClick = sinon.spy();
    const wrapper = mount(<ClearButton clearMessageFunction={onClick}/>);
    wrapper.find('input').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });

});
