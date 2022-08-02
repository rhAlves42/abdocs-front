import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import renderWithProviders from '../../../../testing-util/render-with-providers';
import LoginForm from '../LoginForm';

describe('Login Form Tests', () => {
  it('should render the login inputs on screen', () => {
    renderWithProviders(<LoginForm />);
    const emailEl = screen.getByLabelText<HTMLInputElement>('loginEmail');
    const pwdEL = screen.getByLabelText<HTMLInputElement>('loginPwd');

    expect(pwdEL).toBeVisible();
    expect(emailEl).toBeVisible();
  });

  it('should fill the e-mail input', () => {
    renderWithProviders(<LoginForm />);
    const emailEl = screen.getByLabelText<HTMLInputElement>('loginEmail');
    const newValue = 'ricardo.tolentino';

    expect(emailEl.value).toStrictEqual('');

    fireEvent.change(emailEl, {
      target: { value: newValue },
    });

    expect(emailEl.value).toStrictEqual(newValue);
  });

  it('tests if the password input works', () => {
    renderWithProviders(<LoginForm />);
    const pwdEL = screen.getByLabelText<HTMLInputElement>('loginPwd');
    const newValue = 'S3nhaMu1t0F0rt3';

    expect(pwdEL.value).toStrictEqual('');

    fireEvent.change(pwdEL, {
      target: { value: newValue },
    });

    expect(pwdEL.value).toStrictEqual(newValue);
  });
});
