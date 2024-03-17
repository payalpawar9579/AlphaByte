import React from 'react';
import {cardContent} from '../../Constants';
import Card from '../Card/Card';

const Container = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10'>
      {cardContent.map((item) => (
        <Card 
          key={item.id}
          heading={item.heading}
          img={item.img}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Container;
