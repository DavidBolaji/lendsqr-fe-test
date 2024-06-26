import React from 'react';
import { render, screen } from '@testing-library/react';
import { LendSqrProvider, useLendsqrContext } from './context-provider'; // Update the path based on your file structure



// Mocking localStorage for the test
const localStorageMock = (function() {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// A dummy component for testing purposes
const TestComponent: React.FC = () => {
  const { users } = useLendsqrContext();

  return (
    <div>
      <h1>Users Count: {users.length}</h1>
    </div>
  );
};

describe('LendSqrContext', () => {
  it('provides initial users state and setUsers function', () => {
    render(
      <LendSqrProvider>
        <TestComponent />
      </LendSqrProvider>
    );

    const usersCount = screen.getByText('Users Count: 0'); // Assuming initial state is empty array

    expect(usersCount).toBeInTheDocument();
  });

});
