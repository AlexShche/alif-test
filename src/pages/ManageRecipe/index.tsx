import { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import ManageRecipeForm from '../../shared/ui/ManageRecipeForm';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { setIsEditRecipePage } from '../../redux/actions/recipes';

export const ManageRecipe: FC = () => {
  const params = useParams();
  const location = useLocation();
  const { isEditRecipePage } = useAppSelector((state) => state.recipes);
  const dispatch = useAppDispatch();
  const { recipe } = useAppSelector((state) => ({
    recipe: state.recipes.recipes.find((recipe) => recipe.id === params.id),
  }));

  useEffect(() => {
    dispatch(setIsEditRecipePage(location.pathname));
  }, [location.pathname]);

  if (isEditRecipePage)
    return (
      <div className="container">
        <h1>Редактировать рецепт "{recipe?.name}"</h1>
        <ManageRecipeForm />
      </div>
    );

  return (
    <div className="container">
      <h1>Создать новый рецепт</h1>
      <ManageRecipeForm />
    </div>
  );
};
