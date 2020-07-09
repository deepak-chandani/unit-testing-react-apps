/**
 * Example: Counter demo
 Useful Links
 - testing-library/react https://testing-library.com/docs/react-testing-library/example-intro
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "../../components/Counter";

test('counter increments and decrements when the buttons are clicked', () => {

  // render the Counter component to DOM
  const {container, debug} = render(<Counter/>);
  debug();

  // click on increment button & validate if counter has incremented
  const [incrementBtn, decrementBtn] = container.querySelectorAll("button");


  // click on decrement button & validate if counter has incremented

});
