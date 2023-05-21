import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRecipesState } from '../../shared/types/recipes';

const initialState: IRecipesState = {
  recipes: [
    {
      id: '1',
      name: 'Курица по домашнему',
      cooking_time: 60,
      img: 'https://www.maggi.ru/data/images/recept/img564x436/recept_5841_9s38.jpg',
      description:
        'Сочетание белоснежной сметаны и различных трав, придают этому рецепту невероятно сливочный и нежный вкус, а если готовить это блюдо из домашней птицы, вкус станет еще насыщенней.',
      ingredients: [
        { name: 'Курица', quantity: 1, measurement_value: 'шт' },
        { name: 'Сметана', quantity: 100, measurement_value: 'гр' },
        { name: 'Чеснок', quantity: 1, measurement_value: 'шт' },
      ],
    },
  ],
  isEditRecipePage: false,
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setIsEditRecipePage: (state, action: PayloadAction<boolean>) => {
      state.isEditRecipePage = action.payload;
    },
  },
});

export default recipesSlice.reducer;
