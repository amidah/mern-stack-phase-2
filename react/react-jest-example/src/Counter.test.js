import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';
test('renders Counter component with initial count of 0', () => {
    const { getByText } = render(<Counter />);
    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
});
test('increments and decrements count correctly', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');
    const countElement = getByText('Count: 0');
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('Count: 1');
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('Count: 0');
});