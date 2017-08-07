import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';


// Set up testing environtment to run like a browser in the command line
// window ----> global
global.document = jsdom.jsdom('<!doctype html><html><body></body>')
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componnentInstance = TestUtils.renderIntoDocument(
  <Provider store={createStore(reducers, state)}>  
     {/* <ComponentClass props={props}/>  */}
    <ComponentClass {...props}/>
  </Provider>
)

  return $(ReactDOM.findDOMNode(componnentInstance)); // produces HTML
}

// build helper for simulting events
$.fn.simulate = function(eventName, value) {
   
  TestUtils.Simulate[eventName](this[0]);
  // TestUtils.Simulate.change(this[0]);
}

// to call simulate
// $('div').simulate





// set up chai-jquery

export { renderComponent, expect };