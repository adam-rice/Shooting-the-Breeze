import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';
import sinon from 'sinon';

import SubmitButton from '../lib/components/SubmitButton';

describe('SubmitButton', () => {
  it('renders as an <input>', () => {
    const wrapper = shallow(<SubmitButton draftMessageProp={''}/>)
    assert.equal(wrapper.type(), 'input');
  });

});
