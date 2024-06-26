import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest'; 
import InputComponent from './input-component';


describe('InputComponent', () => {
    it('renders input with default type', () => {
        render(<InputComponent type='text' />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
      });

      it('renders input with custom type', () => {
        render(<InputComponent type="email" />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('type', 'email');
      });

      it('toggles password visibility', () => {
        render(<InputComponent type="password" password data-testid="password" />);
        const input = screen.getByTestId('password');
        const toggle = screen.getByText('SHOW');
        
        // Initially type should be password
        expect(input).toHaveAttribute('type', 'password');
      
        // Click to show password
        fireEvent.click(toggle);
        expect(input).toHaveAttribute('type', 'text');
        expect(toggle).toHaveTextContent('HIDE');
      
        // Click to hide password
        fireEvent.click(toggle);
        expect(input).toHaveAttribute('type', 'password');
        expect(toggle).toHaveTextContent('SHOW');
      });

      it('does not render password toggle when password prop is false', () => {
        render(<InputComponent type="password" />);
        const toggle = screen.queryByText('SHOW');
        expect(toggle).not.toBeInTheDocument();
      });
})