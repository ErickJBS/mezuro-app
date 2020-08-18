import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Switch from './Switch';

describe('Test Switch component', () => {

  test('renders left label', () => {
    const { getByText } = render(<Switch leftDescription="cm" />);
    const linkElement = getByText(/cm/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders right label', () => {
    const { getByText } = render(<Switch rightDescription="in" />)
    const linkElement = getByText(/in/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('handles null callback', () => {
    const { getByText } = render(<Switch leftDescription="cm" />);
    fireEvent.click(getByText(/cm/i));
  });

  test('executes callback', () => {
    const callback = jest.fn();
    const { getByTestId } = render(<Switch onChange={callback} />);

    fireEvent.click(getByTestId('switch'));
    expect(callback).toHaveBeenCalled();
  });

  test('left side starts selected', () => {
    const { getByTestId } = render(<Switch />);
    const linkElement = getByTestId('left-side');

    expect(linkElement).toHaveClass('selected');
  });

  test('right side starts unselected', () => {
    const { getByTestId } = render(<Switch />);
    const rightSide = getByTestId('right-side');

    expect(rightSide).not.toHaveClass('selected');
  });

  test('click switches selected side', () => {
    const { getByTestId } = render(<Switch />);
    const switchElement = getByTestId('switch');
    const leftSide = getByTestId('left-side');
    const rightSide = getByTestId('right-side');

    fireEvent.click(switchElement);

    expect(leftSide).not.toHaveClass('selected');
    expect(rightSide).toHaveClass('selected');
  });

  test('multiple clicks return alternate results', () => {
    let value;
    const callback = (res) => value = res;
    const { getByTestId } = render(<Switch onChange={callback}/>);
    const switchElement = getByTestId('switch');

    fireEvent.click(switchElement);
    expect(value).toBe(false);
    
    fireEvent.click(switchElement);
    expect(value).toBe(true);
  })
});
