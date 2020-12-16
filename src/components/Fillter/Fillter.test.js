import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Fillter from './Fillter';

describe('Fillter', () => {
  let props;
  let shallowFillter;
  let renderedFillter;
  let mountedFillter;

  const shallowTestComponent = () => {
    if (!shallowFillter) {
      shallowFillter = shallow(<Fillter {...props} />);
    }
    return shallowFillter;
  };

  const renderTestComponent = () => {
    if (!renderedFillter) {
      renderedFillter = render(<Fillter {...props} />);
    }
    return renderedFillter;
  };

  const mountTestComponent = () => {
    if (!mountedFillter) {
      mountedFillter = mount(<Fillter {...props} />);
    }
    return mountedFillter;
  };  

  beforeEach(() => {
    props = {};
    shallowFillter = undefined;
    renderedFillter = undefined;
    mountedFillter = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
