
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest'; 
import CustomButton from './custom-button';
import classes from './custom-button.module.scss'

describe('CustomButton', () => {
  it('renders button with text', () => {
    render(<CustomButton text="Click me" />);
    const buttonElement = screen.getByRole('button', { name: 'Click me' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies custom className and other attributes', () => {
    render(<CustomButton text="Submit" className="custom-class" data-testid="submit-button" />);
    const buttonElement = screen.getByTestId('submit-button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('handles click events when enabled', () => {
    const handleClick = vi.fn();
    render(<CustomButton text="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByRole('button', { name: 'Click me' });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders disabled button', () => {
    render(<CustomButton text="Disabled" disabled />);
    const buttonElement = screen.getByRole('button', { name: 'Disabled' });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass(classes.disabled);
  });

  it('does not handle click events when disabled', () => {
    const handleClick = vi.fn();
    render(<CustomButton text="Click me" onClick={handleClick} disabled />);
    const buttonElement = screen.getByRole('button', { name: 'Click me' });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
