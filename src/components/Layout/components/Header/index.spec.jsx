import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('render properly', () => {
  test('render header correct', () => {
    const { getByText } = render(<Header />);
    expect(getByText('React Starter')).toBeTruthy();
  });
});
