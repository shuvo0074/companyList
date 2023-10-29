import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import LoginFormWithMemo from '../src/components/LoginForm';
import { ReduxProvider } from '../src/App';

afterEach(cleanup);


jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));

it('fills in the form and handleSubmit is called', async () => {
  const username = 'hi';
  const password = 'qwerty1234';
  // Create a mock function to pass as onSubmit prop
  const handleSubmit = jest.fn();
  // Render the component
  render(
    <ReduxProvider>
      <LoginFormWithMemo onSubmit={handleSubmit} />
    </ReduxProvider>
  );

  // Fill in the form and submit it
  await fireEvent.changeText(
    screen.getByPlaceholderText(/email/i),
    username,
  );
  await fireEvent.changeText(
    screen.getByPlaceholderText(/password/i),
    password,
  );
  fireEvent.press(screen.getByText(/Sign In/i));

  // Verify that handleSubmit was called with the correct arguments and only once
  expect(handleSubmit).toHaveBeenCalledWith();
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
