import { RefComponent } from './components/useref';
import { Counter } from './components/counter';
import { UseEffectComponent } from './components/useeffect';
import { ContextComponent } from './components/usecontext';
import './App.css';

export default function App() {
  return (
  <div>
    <UseEffectComponent />
    <ContextComponent />
  </div>
  );
}