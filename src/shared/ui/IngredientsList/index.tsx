import { FC } from 'react';
import { TIngredientsListProps } from './types';

import styles from './style.module.css';

const IngredientsList: FC<TIngredientsListProps> = ({ ingredients }) => {
  return (
    <div className={styles.ingredientsWrapper}>
      <h3>Продукты</h3>
      <div className={styles.list}>
        {ingredients.map((ingredient) => (
          <div>
            <span>{ingredient.name}</span>
            <span>{`${ingredient.quantity} ${ingredient.measurement_value}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientsList;
