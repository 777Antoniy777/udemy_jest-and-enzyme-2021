import React, { useState } from 'react';
import { setTestAttributes } from '../utils/set-test-attributes';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app" {...setTestAttributes('component-app')}>
      <h1 {...setTestAttributes('counter')}>
        Counter: <span {...setTestAttributes('count')}>{count}</span>
      </h1>

      <button
        type="button"
        {...setTestAttributes('button')}
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
};
