import React from "react";
import { FC } from 'react';
import { Star } from './Star';

interface StarsContainer {
    skill: string;
    numberOfStars: number;
    numberOfFilledStars: number;
  }
  
  export const StarsContainerComponent: FC<StarsContainer> = ({ skill, numberOfStars, numberOfFilledStars }) => {
    if (numberOfStars < numberOfFilledStars) {
      throw new Error("You cannot defined more filled stars than number of stars. See ya!");
    }
    if (numberOfFilledStars < 1) {
      throw new Error("You cannot defined less filled stars than 1! Wake up BRO!")
    }
  
    let stars: Array<any> = [];
    for (let i = 0; i < numberOfStars; i++){
      stars.push(<Star filled={
        numberOfFilledStars<=i ? false : true
      }/>)
    }
  
    return <div>
      {skill}
      {stars}
      {numberOfFilledStars}/{numberOfStars}
  
  </div>
  }