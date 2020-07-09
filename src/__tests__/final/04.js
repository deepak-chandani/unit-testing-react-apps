/**
 * Example: Login demo
 Useful Links
 - fetchMock http://www.wheresrhys.co.uk/fetch-mock/#aboutintroduction
 */
import React from "react";
import faker from "faker";
import fetchMock from "fetch-mock";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../components/login-submission";

describe('Login submission functionality', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.restore();
  });

  it('invalid user email shows error', async () => {

    // render the Login component to DOM
    render(<Login/>)

    // enter email in input
    const email = faker.internet.email();
    userEvent.type(screen.getByLabelText(/email/i), email);

    // enter password in input
    userEvent.type(screen.getByLabelText(/password/i), '123456');

    // click on submit button
    userEvent.click(screen.getByRole('button'));

    screen.getByRole('spinner');

    await waitForElementToBeRemoved(() => screen.getByRole('spinner'));
    expect(screen.getByRole('alert')).toHaveTextContent('Error: user not found');

  });

  it('valid user email works successfully', async () => {

    // render the Login component to DOM
    render(<Login/>)

    // enter email in input
    const email = 'eve.holt@reqres.in'
    userEvent.type(screen.getByLabelText(/email/i), email);

    // enter password in input
    userEvent.type(screen.getByLabelText(/password/i), '123456');

    // click on submit button
    userEvent.click(screen.getByRole('button'));

    screen.getByRole('spinner');

    await waitForElementToBeRemoved(() => screen.getByRole('spinner'));
    screen.getByText('login successful');
  });

  it('shows error message when API returns error', async () => {

    const errorData = {
      error: 'Whoops! some error encountered'
    };
    fetchMock.mock(/api\/login/, {throws: errorData});

    // render the Login component to DOM
    render(<Login/>)

    // enter email in input
    const email = 'deepak.chandani@gmail.com'
    userEvent.type(screen.getByLabelText(/email/i), email);

    // enter password in input
    userEvent.type(screen.getByLabelText(/password/i), '123456');

    // click on submit button
    userEvent.click(screen.getByRole('button'));

    screen.getByRole('spinner');

    await waitForElementToBeRemoved(() => screen.getByRole('spinner'));
    expect(screen.getByRole('alert')).toHaveTextContent('Error: '+errorData.error);
  });


});

