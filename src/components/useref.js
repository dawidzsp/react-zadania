import { useState, useRef } from "react";

export function RefComponent() {
    const [change, setChange] = useState(0);

    let clickCounterNotRef = 0;
    const countRef = useRef(0);

    const inputRef = useRef(null);

    return (
        <div>
            <h1>useRef</h1>
            <div>
                <button
                    onClick={() => {
                        clickCounterNotRef++;
                        countRef.current++;
                    }}>
                    Kliknij
                </button>
                <button
                    onClick={() => {
                        alert(`Ilość kliknięć z refa: ${countRef.current}\nIlość kliknięć bez refa: ${clickCounterNotRef}`);
                    }}
                >
                    Sprawdź ilość kliknięć
                </button>
                <button onClick={() => setChange(!change)}>Zmień stan</button>
            </div>
            <button onClick={() => inputRef.current.focus()}>FOCUS</button>
            <Input ref={inputRef} />
        </div>
    )
}

function Input({ ref }) {
    return <input type="text" ref={ref} />;
}