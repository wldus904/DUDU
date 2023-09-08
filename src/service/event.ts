export const clickOutSide = (ref, clickEvent) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            clickEvent()
        }
    }

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
};