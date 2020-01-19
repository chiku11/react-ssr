import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import { useSelector } from 'react-redux';

function App() {
  const texts = useSelector(state => state.slide.texts);
  return (
    <Carousel>
    ${texts.map(text => (
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={"holder.js/800x800?text="+text+"&bg=373940"}
            alt="Something went wrong!!!"
          />
        </Carousel.Item>
    ))}
    </Carousel>
  );
}


export default App;
