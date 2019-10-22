import React from 'react';

import { randomInt } from 'utils';

function LazyComponent() {
  return (
    <p>
      I am a lazily loaded components with random value inti: {randomInt(1, 10)}
    </p>
  );
}

export default LazyComponent;
