import { AppDispatch } from '../store';
import { api } from '../api';
import { IGetRecipesResponse } from '../../shared/types/recipes';
import { TManageRecipeFormFields } from '../../shared/ui/ManageRecipeForm/types';
import { recipesSlice } from '../reducers/recipes';
import { history } from '../../index';

export const getRecipes = () => (dispatch: AppDispatch) => {
  api
    .get('/recipes')
    .then((res: IGetRecipesResponse) => {
      console.log({ res });
    })
    .catch((e) => {
      console.log({ e });
    });
};

export const createRecipe = (input: TManageRecipeFormFields) => () => {
  api
    .post('/recipes', input)
    .then(() => {
      history.push('/');
    })
    .catch((e) => {
      console.log({ e });
    });
};

export const editRecipe =
  (input: TManageRecipeFormFields) => (dispatch: AppDispatch) => {
    api
      .put('/recipes', input)
      .then(() => {
        history.push('/');
      })
      .catch((e) => {
        console.log({ e });
      });
  };

export const setIsEditRecipePage =
  (pathname: string) => (dispatch: AppDispatch) => {
    if (pathname.includes('edit'))
      return dispatch(recipesSlice.actions.setIsEditRecipePage(true));
    dispatch(recipesSlice.actions.setIsEditRecipePage(false));
  };
