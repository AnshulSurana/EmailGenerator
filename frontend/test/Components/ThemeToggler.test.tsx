import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render, waitFor, fireEvent } from '@testing-library/react';

import ThemeToggler from '../../src/components/ThemeToggler';


describe('Toggle component', () => {
    it('Should render Toggle Component and check its onclick', async () => {
        render(<ThemeToggler 
            theme={'light'}
            toggleTheme={jest.fn}
        />);
        expect(screen.getByTestId('toggleCheckBox')).toBeInTheDocument();
        const toggle = screen.getByTestId('toggleCheckBox');
        fireEvent.click(toggle, {});
        await waitFor(() => {
            expect(screen.getByTestId('toggleCheckBox')).toBeInTheDocument();
        });
    });
});