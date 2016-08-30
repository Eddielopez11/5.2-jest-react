// Main test js

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Main from '../lib/main'

// Pulling in our actual code!
jest.unmock('../lib/main');

describe("Main component", () => {
  it("Adds tweet to state when submit is clicked", () => {
    // Much like we used jsdom previously, we are mocking our document for
    //   future tests
    const main = TestUtils.renderIntoDocument(
      <Main />
    );

    // Grabbing a reference to the actual DOM node in the "document"
    const mainEl = ReactDOM.findDOMNode(main);
    // Tweets has whatever default value it has
    expect(main.state.tweets.length).toEqual(2);

    // Click submit on tweet button
    main.onClickSubmit({
      preventDefault: ()=>{}
    });
    // Expect that we... added a tweet object to tweets array
    expect(main.state.tweets.length).toEqual(3);
  })
});
