import React from 'react'
import Tour from './Tour';
import Heading from './Heading';

const Tours = (props) => {
  return (
    <>
    <section class="section" id="tours">
      <Heading fw="featured" sw="tours"/>
      

      <div class="section-center featured-center">
        {
          props.data.map((item)=>(
            <Tour {...item}/>
          ))

        }
      </div>
    </section>
    </>
  );
};

export default Tours;