import jsdom from 'jsdom';
import jquery from 'jquery';

// Set up testing environtment to run like a browser in the command line
// window ----> global
global.document = jsdom.jsdom('<!doctype html><html><body></body>')
global.window = global.document.defaultView;
const $ = jquery(global.window);



// build 'renderComponent' helper that should render a given react class



// build helper for simulting events





// set up chai-jquery