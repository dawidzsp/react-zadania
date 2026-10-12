import { RefComponent } from './useref';
import { Counter } from './counter';
import { UseEffectComponent } from './useeffect';
import './App.css';

export default function App() {
  return (
  <div>
    <Counter />
    <RefComponent />
    <UseEffectComponent />
  </div>
  );
}