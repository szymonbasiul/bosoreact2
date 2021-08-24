import React from "react";
import { FC } from 'react';
import { Star } from './Star';

interface StarsContainer {
  skillName: string;
  numberOfStars: number;
  numberOfFilledStars: number;
}

export const StarsContainerComponent: FC<StarsContainer> = ({ skillName, numberOfStars, numberOfFilledStars }) => {
  if (numberOfStars < numberOfFilledStars) {
    throw new Error("You cannot defined more filled stars than number of stars. See ya!");
  }
  if (numberOfFilledStars < 1) {
    throw new Error("You cannot defined less filled stars than 1! Wake up BRO!")
  }

  let stars: Array<React.HTMLProps<() => {}>> = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<Star key={i} filled={
      numberOfFilledStars <= i ? false : true
    } />)
  }
  return <>
    {skillName}
    {stars}
  </>
}

