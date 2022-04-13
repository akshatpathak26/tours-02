import React from 'react';
import Tour from './Tour';
const Tours = ({ tours,removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
      <h4 className='title'>A website owned by akshat pathak</h4>
    </section>
  );
};


export default Tours;
