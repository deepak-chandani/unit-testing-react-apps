/**
 * Example: Login demo
 Useful Links
 - https://jestjs.io/docs/en/mock-functions
 */
import React from "react";
import faker from 'faker';
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../components/Login";

const buildLoginData = (overrides = {}) => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  let submittedData = null;
  const handleSubmit = jest.fn();

  // render the Login component to DOM
  const {container, getByLabelText, getByRole} = render(<Login onSubmit={handleSubmit} />)
  const queries = within(container);

  const userData = {
    username: 'deepak.chandani',
    password: '123456',
  };

  // enter username in input
  userEvent.type(getByLabelText(/username/i), userData.username);

  // enter password in input
  userEvent.type(getByLabelText(/password/i), userData.password);

  // click on submit button
  userEvent.click(getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(userData);
});

/* eslint-disable */
