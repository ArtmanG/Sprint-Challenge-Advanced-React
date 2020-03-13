import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export function useDarkMode (key, initialValue) {
    
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    useEffect(() => {
        if(darkMode === true) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};