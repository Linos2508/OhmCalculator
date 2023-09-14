import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { IOhmValueCalculator } from './utils';
import { IOhm } from './types';

describe('IOhmValueCalculator function', () => {
  it('Should return correct IOhm value', () => {
    let resistor: IOhm = {
      BandA: 1,
      BandB: 1,
      BandC: undefined,
      BandD: 2,
      Tolerance: 10,
    };
    expect(IOhmValueCalculator(resistor)).toBe(1100);
    resistor.BandC = 0;
    resistor.BandD = 3;
    expect(IOhmValueCalculator(resistor)).toBe(110000);
    resistor.BandA = 5;
    resistor.BandD = 0
    expect(IOhmValueCalculator(resistor)).toBe(510);
    resistor.BandD = 4
    expect(IOhmValueCalculator(resistor)).toBe(5100000);
  });
});

describe('UI tests', () => {
  it('Should render form and selects correctly', () => {
    render(<App />);
    expect(screen.queryByTestId('selectBandA')).toBeInTheDocument();
    expect(screen.queryByTestId('selectBandB')).toBeInTheDocument();
    expect(screen.queryByTestId('selectBandC')).toBeInTheDocument();
    expect(screen.queryByTestId('selectBandD')).toBeInTheDocument();
    expect(screen.queryByTestId('selectTolerance')).toBeInTheDocument();
  });
});