import { FC, useEffect } from 'react';

import RecipeCardItem from '../RecipeCardItem';
import { getRecipes } from '../../../redux/actions/recipes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import styles from './style.module.css';

const RecipesList: FC = () => {
  const dispatch = useAppDispatch();
  const { recipes } = useAppSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <div className={styles.wrapper}>
      <RecipeCardItem recipe={recipes[0]} />
    </div>
  );
};

export default RecipesList;
