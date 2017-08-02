import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App' , () => {

  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {

    // create an instance of app
    const component = renderComponent(App);

    // Use 'Expect' to make an 'assertion' about a target
    expect(component).to.contain('React simple starter');
  });
});
