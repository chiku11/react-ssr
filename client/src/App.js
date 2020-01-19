import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const texts = useSelector(state => state.slide.texts);
  useEffect(() => {
    dispatch({type: 'show'});
  }, [dispatch]);
  return (
    <Carousel>
    ${texts.map(text => (
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={"holder.js/800x800?text="+text+"&bg=373940"}
          />
        </Carousel.Item>
    ))}
    </Carousel>
  );
}


export default App;
