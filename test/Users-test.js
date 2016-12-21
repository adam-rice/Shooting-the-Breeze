/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import { map } from 'lodash';
import Users from '../lib/components/Users';

describe("Users", () => {
  let chat;
  beforeEach(() => {
    chat = {
      messages: {
        user: {
          displayName: 'Andy Young',
          email: 'xyz@gmail.com',
          uid: '0101'
        },
        content: 'I am a cha cha machine'
      }
    };
  });

  it('renders as an <article>', () => {
    const wrapper = shallow(<Users messages={[]}/>)
    assert.equal(wrapper.type(), 'article');
  });

  it.skip('renders one li when a message is submitted', () => {
    const wrapper = shallow(<Users messages={[]} />)
    expect(wrapper.find('li')).to.have.length(1)
  });

});
