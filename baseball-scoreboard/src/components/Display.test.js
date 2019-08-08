import React from 'react';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';
import Display from './Display.js';

describe('Display.js', () => {
  it('displays balls', () => {
    const display = render(<Display/>)
    display.getAllByAltText(/balls/i)
  })
  it('displays strikes', () => {
    const display = render(<Display/>)
    display.getAllByAltText(/strikes/i)
  })
})
