import { describe, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import MainPage from './index';

describe('Input', () => {
  afterAll(() => {
    cleanup();
  });
  render(<MainPage />);
  const input: HTMLInputElement =
    screen.getByPlaceholderText('Search for players');
  it('has navigation', () => {
    expect(input).toBeDefined();
  });
  it('is not disabled', () => {
    expect(input).not.toBeDisabled();
  });
  it('should accept symbols', () => {
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'Rashford' } });
    expect(input.value).toBe('Rashford');
  });
});
