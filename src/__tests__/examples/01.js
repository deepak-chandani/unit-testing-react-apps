/**
 * Example: DisplayNumber demo
 Useful Links
 - testing-library/react https://testing-library.com/docs/react-testing-library/example-intro
 - Mock Functions https://jestjs.io/docs/en/mock-functions
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DisplayNumber from "../../components/DisplayNumber";

test('entering an invalid value shows an error message', () => {

  // render the DisplayNumber component to DOM
  const {debug, rerender} = render(<DisplayNumber/>);

  // debug();

  // get input & enter some invalid number into it
  const input = screen.getByLabelText(/enter number/i);
  userEvent.type(input, "10");

  // debug();
  // assert that invalid number message is displayed
  expect(screen.getByRole('alert')).toHaveTextContent('The number is invalid');

  // type any valid number & assert that invalid message is removed
  userEvent.type(input, "5");
  expect(screen.queryByRole("alert")).not.toBeInTheDocument()

  rerender(<DisplayNumber max="45" />)

});
