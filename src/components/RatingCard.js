import React from 'react';
import star from '../images/icon-star.svg';
import RatingButtons from './RatingButtons';

function RatingCard() {
  return (
    <article class="arcticle">
      <img src={star} alt="" className="star" />
      <h1> How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingButtons />
    </article>
  );
}

export default RatingCard;
