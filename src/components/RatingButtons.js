import React from 'react';
import { useGlobalContext } from '../context';

function RatingButtons() {
  const { rating, setRating, setIsSubmited } = useGlobalContext();
  return (
    <>
      <div className="rateButtons">
        <button type="button" onClick={() => setRating(1)}>
          1
        </button>
        <button type="button" onClick={() => setRating(2)}>
          2
        </button>
        <button type="button" onClick={() => setRating(3)}>
          3
        </button>
        <button type="button" onClick={() => setRating(4)}>
          4
        </button>
        <button type="button" onClick={() => setRating(5)}>
          5
        </button>
      </div>
      <button
        onClick={() => (rating ? setIsSubmited(true) : setIsSubmited(false))}
        className="submitButton"
      >
        SUBMIT
      </button>
    </>
  );
}

export default RatingButtons;
