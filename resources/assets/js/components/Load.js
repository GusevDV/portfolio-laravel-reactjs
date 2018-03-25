import React from 'react';

function Load(props) {
  const loading = props.loading;
  if (loading) {
    return <div className='async-spinner'></div>
  }
  return (null);

}

export default Load;
