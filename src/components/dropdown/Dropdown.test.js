import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('Test Dropdown component', () => {

    test('renders initial message', () => {
        const { getByDisplayValue } = render(<Dropdown message="Search test" />);
        const linkElement = getByDisplayValue(/Search test/i);

        expect(linkElement).toBeInTheDocument();
    });

    test('handles null callback', () => {
        const options = [{ label: 'Test0', value: 0 }, { label: 'Test1', value: 0 }];
        const { getByTestId } = render(<Dropdown options={options} />);
        fireEvent.click(getByTestId('option-0'));
    });

    test('executes callback', () => {
        const callback = jest.fn();
        const options = [{ label: 'Test0', value: 0 }, { label: 'Test1', value: 0 }];
        const { getByTestId } = render(<Dropdown onSelectionChanged={callback} options={options} />);

        fireEvent.click(getByTestId('option-1'));
        expect(callback).toHaveBeenCalled();
    });

    test('renders all options', () => {
        const items = 10;
        const options = [...Array(items)].map((_, i) => ({ label: `Test${i}`, value: i }));

        const { getByTestId } = render(<Dropdown options={options} />);

        for (let i = 0; i < 10; i++) {
            const linkElement = getByTestId(`option-${i}`);
            expect(linkElement).toBeInTheDocument();
        }
    });

    test('callback returns clicked option value', () => {
        let result;
        const callback = (value => result = value);

        const options = [{ label: 'Test0', value: 1 }, { label: 'Test1', value: 2 }];
        const { getByTestId } = render(<Dropdown onSelectionChanged={callback} options={options} />);

        fireEvent.click(getByTestId('option-0'));
        expect(result).toBe(1);

        fireEvent.click(getByTestId('option-1'));
        expect(result).toBe(2);
    })

    test('dropdown starts folded', () => {
        const { getByTestId } = render(<Dropdown />);
        const linkElement = getByTestId('container');

        expect(linkElement).toHaveClass('folded');
    });

    test('click unfolds dropdown', () => {
        const { getByTestId } = render(<Dropdown />);
        const dropdown = getByTestId('dropdown');
        const options = getByTestId('container');

        expect(options).toHaveClass('folded');
        fireEvent.click(dropdown);
        expect(options).toHaveClass('unfolded');
    });

});
