import { IRecipeIngredient } from '../../types/recipes';

export type TManageRecipeFormFields = {
  name: string;
  cooking_time: number;
  img: string;
  description: string;
  ingredients: IRecipeIngredient[];
};
