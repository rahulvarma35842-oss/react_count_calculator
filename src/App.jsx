import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h2>Counter</h2>
      <p className="value">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="secondary" onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}

function Calculator() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    if (first.trim() === '' || second.trim() === '') {
      setResult('Enter both numbers');
      return;
    }

    const a = Number(first);
    const b = Number(second);

    if (operator === '+') setResult(a + b);
    if (operator === '-') setResult(a - b);
    if (operator === '×') setResult(a * b);
    if (operator === '÷') setResult(b === 0 ? 'Cannot divide by zero' : a / b);
  };

  return (
    <section className="card">
      <h2>Calculator</h2>
      <input
        type="number"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
        placeholder="Second number"
      />
      <div className="buttons operators">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>−</button>
        <button onClick={() => calculate('×')}>×</button>
        <button onClick={() => calculate('÷')}>÷</button>
      </div>
      <p className="result">Result: {result === '' ? '—' : result}</p>
    </section>
  );
}

export default function App() {
  return (
    <main className="container">
      <h1>React State: Counter & Calculator</h1>
      <Counter />
      <Calculator />
    </main>
  );
}
