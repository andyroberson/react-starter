import { useState } from 'react';
import Button from '@/components/button/Button';
import '@/styles/main.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React + Sass Starter</h1>
        <p>Ready rapid prototyping</p>
      </header>

      <main className="app-main">
        <div className="counter">
          <h2>Counter: {count}</h2>
          <div className="counter-buttons">
            <Button onClick={() => setCount(count - 1)} variant="secondary">
              -
            </Button>
            <Button onClick={() => setCount(count + 1)} variant="primary">
              +
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
