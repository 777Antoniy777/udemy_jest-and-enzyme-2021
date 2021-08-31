import React, { FC } from 'react';
import { setTestAttributes } from '../../utils/set-test-attributes';

export interface CongratsProps {
  status: boolean;
}

export const Congrats: FC<CongratsProps> = (props) => {
  const { status } = props;

  return (
    <div {...setTestAttributes('component-congrats')}>
      {status && <p {...setTestAttributes('congrats-message')}>Good job!</p>}
    </div>
  );
};
