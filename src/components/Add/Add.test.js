import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Add from './Add';

describe('Add', () => {
  let props;
  let shallowAdd;
  let renderedAdd;
  let mountedAdd;

  const shallowTestComponent = () => {
    if (!shallowAdd) {
      shallowAdd = shallow(<Add {...props} />);
    }
    return shallowAdd;
  };

  const renderTestComponent = () => {
    if (!renderedAdd) {
      renderedAdd = render(<Add {...props} />);
    }
    return renderedAdd;
  };

  const mountTestComponent = () => {
    if (!mountedAdd) {
      mountedAdd = mount(<Add {...props} />);
    }
    return mountedAdd;
  };  

  beforeEach(() => {
    props = {};
    shallowAdd = undefined;
    renderedAdd = undefined;
    mountedAdd = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
