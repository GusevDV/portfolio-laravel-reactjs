import React from 'react';

function Load(props) {
  return (
    props.loading ? <div className='async-spinner'></div> : null
  );
}

export default Load;
