import React from 'react';
import { StyledThankyou } from './styled/thankyou.styled';

export const Thankyou = () => {
  return (
    <StyledThankyou>
      <img src={require('./assets/images/icon-thank-you.svg').default} alt='Thank you' width='78px'/>
      <h1>
        Thank you!
      </h1>
      <h2>
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.
      </h2>
    </StyledThankyou>
  )
}
