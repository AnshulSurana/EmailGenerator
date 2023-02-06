import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react';

import HeaderComponent from '../../src/components/HeaderComponent';

jest.mock('../../src/Components/ThemeToggler', () =>
    jest.fn(() => <div data-testid="mockedThemeToggler" />)
);

describe('Header component', () => {
    it('Should render Header Component', () => {
        render(<HeaderComponent 
            theme={'light'}
            themeToggler={jest.fn}
        />);
        expect(screen.getByTestId('headerTitle')).toBeInTheDocument();
        expect(screen.getByTestId('mockedThemeToggler')).toBeInTheDocument();
        expect(screen.getByText('Email Guesser')).toBeVisible();
    });
});