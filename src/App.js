import { useState } from 'react';
import { RefComponent } from './useref';
import './App.css';

export default function App() {
  return (
  <div>
    <Counter />
    <RefComponent />
  </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    name: '',
    email: '' 
  });
  const [text, setText] = useState('');
  const increment = (value) => setCount(count + value);
  const decrement = (value) => setCount(count - value);
  const reset = () => setCount(0);
  
  const modifyPerson = () => setPerson({
    ...person,
    name: text
  });

  const modifyEmail = () => setPerson({
    ...person,
    email: text
  });

  console.log('Render counter');

  return (
    <div>
      <h1>Licznik</h1>
      <p id="count">{count}</p>

      <div>
        <button onClick={() => decrement(1)}>Odejmij 1</button>
        <button onClick={() => increment(1)}>Dodaj 1</button>
        <button onClick={() => increment(3)}>Dodaj 3</button>
        <button onClick={reset}>Resetuj</button>
      </div>

      <div>
        <Input value={text} onChange={value => setText(value)} />
        <button onClick={modifyPerson}>Modyfikuj obiekt</button>
        <button onClick={modifyEmail}>Modyfikuj email</button>
      </div>
      
      <div>
        <p>{person.name}</p>
        <p>{person.email}</p>
      </div>

      <div id="text">
        <p>{text}</p>
      </div>
    </div>

  );
}

function Input({ value, onChange }) {

  console.log('Render input');

  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}