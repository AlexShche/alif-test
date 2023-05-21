export interface IRecipesState {
  readonly recipes: IRecipe[];
  readonly isEditRecipePage: boolean;
}

export interface IRecipeIngredient {
  name: string;
  quantity: number;
  measurement_value: string;
}

export interface IRecipe {
  id: string;
  name: string;
  cooking_time: number;
  img: string;
  description: string;
  ingredients: IRecipeIngredient[];
}

export interface IGetRecipesResponse {
  readonly data: {
    readonly recipes: IRecipe[];
  };
}
