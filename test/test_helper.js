import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';


// Set up testing environtment to run like a browser in the command line
// window ----> global
global.document = jsdom.jsdom('<!doctype html><html><body></body>')
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
  const componnentInstance = TestUtils.renderIntoDocument(<ComponentClass />)

  return $(ReactDOM.findDOMNode(componnentInstance)); // produces HTML
}

// build helper for simulting events





// set up chai-jquery