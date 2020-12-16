import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ButtonAdd from './ButtonAdd';

describe('ButtonAdd', () => {
  let props;
  let shallowButtonAdd;
  let renderedButtonAdd;
  let mountedButtonAdd;

  const shallowTestComponent = () => {
    if (!shallowButtonAdd) {
      shallowButtonAdd = shallow(<ButtonAdd {...props} />);
    }
    return shallowButtonAdd;
  };

  const renderTestComponent = () => {
    if (!renderedButtonAdd) {
      renderedButtonAdd = render(<ButtonAdd {...props} />);
    }
    return renderedButtonAdd;
  };

  const mountTestComponent = () => {
    if (!mountedButtonAdd) {
      mountedButtonAdd = mount(<ButtonAdd {...props} />);
    }
    return mountedButtonAdd;
  };  

  beforeEach(() => {
    props = {};
    shallowButtonAdd = undefined;
    renderedButtonAdd = undefined;
    mountedButtonAdd = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
