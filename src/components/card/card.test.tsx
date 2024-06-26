import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest'; 
import Card from './card';

describe('Card', () => {
  const mockCardData = {
    icon: 'path/to/icon.png',
    title: 'Users',
    value: '100',
  };

  it('renders card with icon, title, and value', () => {
    render(<Card {...mockCardData} />);
    
    const iconElement = screen.getByAltText('Users');
    expect(iconElement).toBeInTheDocument();

    const titleElement = screen.getByText('Users');
    expect(titleElement).toBeInTheDocument();

    const valueElement = screen.getByText('100');
    expect(valueElement).toBeInTheDocument();
  });


  it('handles missing props gracefully', () => {
    // Example of testing with missing props
    render(<Card title="Users" />); // Missing icon and value
    const cardElement = screen.queryByTestId('card'); // Use queryByTestId to check absence
    expect(cardElement).not.toBeInTheDocument();
  });
});
