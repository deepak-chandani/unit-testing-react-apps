/**
 * Example: Counter demo
 Useful Links
 - testing-library/react https://testing-library.com/docs/react-testing-library/example-intro
 */
import React from "react";
import {fireEvent, render, screen } from "@testing-library/react";
import Counter from "../../components/Counter";
import DisplayNumber from "../../components/DisplayNumber";

test('counter increments and decrements when the buttons are clicked', () => {

  // render the Counter component to DOM
  const {container} = render(<Counter />);
  // const {container2} = render(<DisplayNumber />);

  // click on increment button & validate if counter has incremented
  const [incrementBtn, decrementBtn] = container.querySelectorAll("button");
  incrementBtn.click();
  incrementBtn.click();
  screen.getByText('Current count: 2');

  decrementBtn.click();
  fireEvent.click(decrementBtn);
  // userEvent.click(decrementBtn)
  screen.getByText('Current count: 0');

});
