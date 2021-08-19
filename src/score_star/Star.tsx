import { FC } from 'react';
import ImgPicker from '../reusable_functions/ImgPicker'


interface StarInterface {
  filled: boolean;
}

export const Star: FC<StarInterface> = ({ filled }) => {
  const startEmpty = (
    <img src={ImgPicker("png_star")} alt="star" />
  );
  const starFilled = (
    <img src={ImgPicker("star_skill")} alt="star" />
  )
  return <div>{filled ? starFilled : startEmpty}</div>
};

