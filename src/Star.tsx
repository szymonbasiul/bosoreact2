import React from 'react';
import { FC } from 'react';


interface StarInterface {
    filled: boolean;
  }
  
  export const Star: FC<StarInterface> = ({ filled }) => {
    return <div>{filled ? "x" : "o"}</div>
};
  
