import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import DisplayNumber from "../../components/DisplayNumber";

test("entering an invalid value shows an error message", () => {
  // render the Counter component to DOM
  render(<DisplayNumber/>);
  // get input & enter some invalid number into it
  const input = screen.getByLabelText(/enter number/i);
  user.type(input, "10");

  // screen.debug();

  // assert that invalid number message is displayed
  // expect(screen.getByRole('alert')).toHaveTextContent('The number is invalid');

  expect(screen.getByRole("alert").textContent).toMatchInlineSnapshot(
    `"The number is invalid"`
  );

  // type any valid number & assert that invalid message is removed
  user.type(input, "5");
  expect(screen.queryByRole("alert")).toBeNull();

});
