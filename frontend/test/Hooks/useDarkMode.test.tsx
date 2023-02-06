import { renderHook } from '@testing-library/react';
import useDarkMode from '../../src/Hooks/useDarkMode';


describe('UseDarkMode hook tests', () => {
    it('Should be callable', () => {
        expect(typeof useDarkMode).toBe('function');
    });
    it('Should return a triplet', () => {
        const { result } = renderHook(() => useDarkMode())
        expect(result.current.length).toBe(3);
    });
});