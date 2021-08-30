import React, { FC } from 'react';
import { setTestAttributes } from '../../utils/set-test-attributes';

export interface Congrats {
  status: boolean;
}

export const Congrats: FC<Congrats> = (props) => {
  const { status } = props;

  return (
    <div {...setTestAttributes('congrats-component')}>
      {status && <p>Good job!</p>}
    </div>
  );
};
