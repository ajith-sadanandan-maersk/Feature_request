
import * as React from 'react';

const Nav = () => {

  return (
    <>
    <nav
      style={{
        backgroundColor: '#42b0d5',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        top: '0',
        position: 'absolute'
      }}>
      Header
    </nav>
    <nav
      style={{
        backgroundColor: '#42b0d5',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        bottom: '0',
        position: 'absolute'
      }}>
      Footer
    </nav>
    </>
  );
};

export default Nav;