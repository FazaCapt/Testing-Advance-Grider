import jsdom from 'jsdom';


// Set up testing environtment to run like a browser in the command line
// window ----> global
global.document = jsdom.jsdom('<!doctype html><html><body></body>')
global.window = global.document.defaultView;
// build 'renderComponent' helper that should render a given react class

// build helper for simulting events

// set up chai-jquery