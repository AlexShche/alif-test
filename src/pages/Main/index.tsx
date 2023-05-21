import { FC } from 'react';
import RecipesList from '../../shared/ui/RecipesList';

export const Main: FC = () => {
  return (
    <div className='container'>
      <h1>Список рецептов</h1>
      <RecipesList />
    </div>
  );
};
