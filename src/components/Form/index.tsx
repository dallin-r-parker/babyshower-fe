import React from 'react';

export const Form: React.FC = (): JSX.Element => (
  <div style={{ color: 'white', textAlign: 'center', fontSize: '26px' }}>
    <h1>Baby Shower starts at 2:00pm EST</h1>
    <h1>
      <a target="_blank" rel="noopener noreferrer" href="https://zoom.us/download">
        Downlad Zoom
      </a>{' '}
      and{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://zoom.us/j/925350848">
        CLICK HERE
      </a>{' '}
      to join the party
    </h1>
  </div>
);
