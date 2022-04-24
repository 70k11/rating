import React from 'react';
import illustration from '../images/illustration-thank-you.svg';
import { useGlobalContext } from '../context';

function ThankYouCard() {
  const { rating } = useGlobalContext();
  return (
    <article class="article thankYouCard">
      <img src={illustration} alt="" className="illustration" />
      <p className="rating">You selected {rating} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <form></form>
    </article>
  );
}

export default ThankYouCard;
