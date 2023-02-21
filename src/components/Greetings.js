import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/features/slice';

const Greetings = () => {
  const dispatch = useDispatch();

  const fetchedGreeting = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Greetings</h1>
      <div>
        {fetchedGreeting.greetings
          ? <p>{fetchedGreeting.greetings.greetings}</p>
          : <p>No greetings available</p>}
      </div>
    </div>
  );
};

export default Greetings;
