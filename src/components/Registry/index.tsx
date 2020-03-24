import React from 'react';

export const Registry: React.FC = (): JSX.Element => (
  <>
    <h2
      style={{
        textAlign: 'center',
        padding: '10px',
        paddingBottom: '30px',
        fontSize: `22px`
      }}
    >
      <span style={{ fontFamily: 'Sacramento', fontSize: `30px` }}>Mikayda & Dallin</span> <br />
      are registered here:
      <br />
      <br />
      <a href="https://www.babylist.com/baby-reg-mikayda" target="_blank" rel="noopener noreferrer">
        <img
          alt=""
          height="30"
          src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto/v1547580354/Babylist_logo_horizontal_oawglq.png"
        />
      </a>
    </h2>
  </>
);
