import { act, renderHook } from '@testing-library/react';
import useEmail from '../../src/Hooks/useEmail';


describe('UseEmail hook tests', () => {
    it('Should be callable', () => {
        expect(useEmail).toBeInstanceOf(Function);
    });
    it('Should return an object', () => {
        const { result } = renderHook(() => useEmail())
        expect(result.current).toBeInstanceOf(Object);
    });
    it('Should be able to call getAPIData', () => {
        const { result } = renderHook(() => useEmail())
        act(async () => {
            await result.current.getAPIData('Anshul Surana', 'babbel.com');
        })
    });
    it('Should be able to call reset', () => {
        const { result } = renderHook(() => useEmail())
        act(() => {
            result.current?.reset();
        })
    });
});