import React, { useState } from 'react';

const MyWidget = ({ title, quote, loading }) => {
  const [numClicks, setNumClicks] = useState(0);

  if (loading) {
    return <div>Please wait...Loading...</div>
  }

  return (
    <div style={{ width: '400px', height: '250px', backgroundColor: 'ghostwhite', border: '1px solid silver', display: 'inline-block', margin: '10px 25px' }}>
      <h3 style={{
        padding: '0 10px',
        textAlign: 'center', whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {title}
      </h3>

      <p>
        {quote || 'Sorry, no quote defined'}
      </p>
      <p>{numClicks}</p>
      <div onClick={() => {
        setNumClicks(numClicks + 1);
      }}>
        Click
      </div>
    </div>
  )
}

export default MyWidget;
