import { FC } from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import { TRecipesCardItemProps } from './types';
import TimeBadge from '../TimeBadge';

const { Meta } = Card;

const RecipeCardItem: FC<TRecipesCardItemProps> = ({ recipe }) => {
  const { id, img, name, cooking_time } = recipe;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <Card onClick={onClick} hoverable cover={<img alt="dish" src={img} />}>
      <TimeBadge time={cooking_time} />
      <div></div>
      <Meta title={name} />
    </Card>
  );
};

export default RecipeCardItem;
