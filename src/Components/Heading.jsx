import React from 'react'

const Heading = ({fw,sw}) => {
  return (
    <div class="section-title">
        <h2>{fw}<span>{sw}</span></h2>
      </div>
  );
};

export default Heading;