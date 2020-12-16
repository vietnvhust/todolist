import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Item from './Item';

describe('Item', () => {
  let props;
  let shallowItem;
  let renderedItem;
  let mountedItem;

  const shallowTestComponent = () => {
    if (!shallowItem) {
      shallowItem = shallow(<Item {...props} />);
    }
    return shallowItem;
  };

  const renderTestComponent = () => {
    if (!renderedItem) {
      renderedItem = render(<Item {...props} />);
    }
    return renderedItem;
  };

  const mountTestComponent = () => {
    if (!mountedItem) {
      mountedItem = mount(<Item {...props} />);
    }
    return mountedItem;
  };  

  beforeEach(() => {
    props = {};
    shallowItem = undefined;
    renderedItem = undefined;
    mountedItem = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
