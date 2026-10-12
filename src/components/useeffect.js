import { useEffect, useRef, useState } from 'react';

export function UseEffectComponent() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCounter((prevCounter) => prevCounter + 1), 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const resizeFunction = () => console.log('resize');
        window.addEventListener('resize', resizeFunction);

        return () => window.removeEventListener('resize', resizeFunction);
    }, []);

    const inputRef = useRef(null);

    const [text, setText] = useState('');

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h1>useEffect</h1>
            <input type="text" ref={inputRef} value={text}
            onChange={(e) => {
                setText(e.target.value);
                document.title = e.target.value;
            }} />
        </div>
    );
}