
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest'; 

import LoginForm from './login-form';


vi.mock('react-router-dom', async (importActual) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = await importActual() as unknown as any;
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe('LoginForm', () => {
  it('renders email and password fields', () => {
    render(<LoginForm />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('submits the form with valid credentials', async () => {
   
    render(<LoginForm />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByText('Log In');

    // Fill out the form fields
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Loader is not visible
    const isLoader = screen.queryByTestId('loader');
    expect(isLoader).toBeNull()

    // Submit the form
    fireEvent.click(submitButton);
  
    // Wait for the loading state to resolve
    await waitFor(() => {
        // button is disabled and loader is visible
        expect(screen.getByRole("button")).toBeDisabled()
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
   
  });

  it('shows validation errors for invalid input', async () => {
    render(<LoginForm />);
    
    const submitButton = screen.getByText('Log In');

    // Submit the form without filling out fields
    fireEvent.click(submitButton);

    // Check for validation error messages
    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });


});
