import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

const langData = {
    language: {
        PL: 'Aktualny język',
        EN: 'Current language'
    }
}

export function ContextComponent() {
    const [language, setLanguage] = useState('PL');

    const changeLanguage = () => setLanguage(language === 'PL' ? 'EN' : 'PL');

    return (
        <LanguageContext value={language}>
            <h1>useContext</h1>
            <section>
                <header>
                    <button onClick={changeLanguage}>Zmień język</button>
                </header>
                <SecondComponent />
            </section>
        </LanguageContext>
    );
}

function SecondComponent() {
    return (
        <div>
            <ThirdComponent />
        </div>
    );
}

function ThirdComponent() {
    const lang = useContext(LanguageContext);

    return (
        <p>
            {langData.language[lang]}: {lang}
        </p>
    );
}