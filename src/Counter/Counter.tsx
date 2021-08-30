import React, { useState } from 'react';
import { setTestAttributes } from '../utils/set-test-attributes';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [errorStatus, setErrorStatus] = useState(false);

  return (
    <div className="counter" {...setTestAttributes('component-counter')}>
      <h1 {...setTestAttributes('counter')}>
        Counter: <span {...setTestAttributes('count')}>{count}</span>
      </h1>

      {errorStatus && <p style={{ color: 'red' }} {...setTestAttributes('error-message')}>Cannot set value less than 0</p>}

      <button type="button" {...setTestAttributes('decrement-button')} onClick={() => {
        if (count === 0) {
          setErrorStatus(true);
          setCount(0);

          return;
        }

        setCount(count - 1);
      }}>
        Decrease
      </button>

      <button type="button" {...setTestAttributes('increment-button')} onClick={() => {
        if (errorStatus) {
          setErrorStatus(false);
        }

        setCount(count + 1)
      }}>
        Increase
      </button>
    </div>
  );
};
