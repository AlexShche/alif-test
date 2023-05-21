import { lazy, FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { EndPoints } from './endPoints';

const Main = lazy(() =>
  import('../pages/Main').then(({ Main }) => ({
    default: Main,
  })),
);

const ManageRecipe = lazy(() =>
  import('../pages/ManageRecipe').then(({ ManageRecipe }) => ({
    default: ManageRecipe,
  })),
);

const Recipe = lazy(() =>
  import('../pages/Recipe').then(({ Recipe }) => ({
    default: Recipe,
  })),
);

const Router: FC = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path={EndPoints.MAIN} element={<Main />} />
        <Route path={EndPoints.CREATE} element={<ManageRecipe />} />
        <Route path={EndPoints.EDIT} element={<ManageRecipe />} />
        <Route path={EndPoints.RECIPE} element={<Recipe />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
