import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { useAppSelector } from '../../shared/hooks/redux';
import IngredientsList from '../../shared/ui/IngredientsList';
import TimeBadge from '../../shared/ui/TimeBadge';

import styles from './style.module.css';

export const Recipe: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { recipe } = useAppSelector((state) => ({
    recipe: state.recipes.recipes.find((recipe) => recipe.id === params.id),
  }));

  const onEdit = () => {
    navigate(`/edit/${recipe?.id}`);
  };

  return (
    <div className="container">
      {recipe ? (
        <>
          <h1 className={styles.titlePage}>
            {recipe.name}{' '}
            <Button onClick={onEdit}>
              <EditOutlined />
            </Button>
          </h1>
          <div className={styles.contentGrid}>
            <div className={styles.imgWrapper}>
              <TimeBadge time={recipe.cooking_time} />
              <img src={recipe.img} alt="dish" />
            </div>
            <div className={styles.rightBar}>
              <IngredientsList ingredients={recipe.ingredients} />
              <h3 className={styles.title}>Описание</h3>
              <div>{recipe.description}</div>
            </div>
          </div>
        </>
      ) : (
        <>Упс, ничего не найдено</>
      )}
    </div>
  );
};
