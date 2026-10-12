import { RefComponent } from './components/useref';
import { Counter } from './components/counter';
import { UseEffectComponent } from './components/useeffect';
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