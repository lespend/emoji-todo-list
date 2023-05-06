import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
    function getValue() {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        return initialValue
    }
    
    const [value, setValue] = useState(getValue())
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])
    return [value, setValue];
}