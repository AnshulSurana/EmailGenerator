import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render, fireEvent } from '@testing-library/react';

import BodyComponent from '../../src/components/BodyComponent';

jest.mock('../../src/Components/ThemeToggler', () =>
    jest.fn(() => <div data-testid="mockedThemeToggler" />)
);

describe('Body component', () => {
    it('Should render Body Component and verify the texts visible', () => {
        render(<BodyComponent />);
        expect(screen.getByText('Email Guesser')).toBeVisible();
        expect(screen.getByText('Try Generating Emails for Users')).toBeVisible();
        expect(screen.getByText('Enter Full Name')).toBeVisible();
        expect(screen.getByText('Enter Company Domain')).toBeVisible();
        expect(screen.getByTestId('generateButton')).toBeVisible();
    });
    it('Should render Body Component and verify the input fields are writtable', () => {
        render(<BodyComponent />);
        expect(screen.getByTestId('nameInput')).toBeVisible();
        expect(screen.getByTestId('domainInput')).toBeVisible();
        const nameInput = screen.getByTestId('nameInput');
        const domainInput = screen.getByTestId('domainInput');
        fireEvent.change(nameInput, {
            target: { value: "Anshul Surana" }
        });
        expect(nameInput).toHaveValue('Anshul Surana');
        fireEvent.change(domainInput, {
            target: { value: "domain.com" }
        });
        expect(domainInput).toHaveValue('domain.com');
    });
    it('Should render Body Component and verify the generate button are clickable', () => {
        render(<BodyComponent />);
        expect(screen.getByTestId('generateButton')).toBeVisible();
        const button = screen.getByTestId('generateButton');
        fireEvent.click(button);
        expect(screen.getByText('ENTER VALID fullName')).toBeVisible();
        expect(screen.getByText('ENTER VALID domain')).toBeVisible();
    });
    it('Should test and verify the generate button after input values', () => {
        render(<BodyComponent />);
        expect(screen.getByTestId('nameInput')).toBeVisible();
        expect(screen.getByTestId('domainInput')).toBeVisible();
        const nameInput = screen.getByTestId('nameInput');
        const domainInput = screen.getByTestId('domainInput');
        fireEvent.change(nameInput, {
            target: { value: "Anshul Surana" }
        });
        expect(nameInput).toHaveValue('Anshul Surana');
        fireEvent.change(domainInput, {
            target: { value: "domain.com" }
        });
        expect(screen.getByTestId('form')).toBeVisible();
        const form = screen.getByTestId('form');
        fireEvent.submit(form);
    });
});