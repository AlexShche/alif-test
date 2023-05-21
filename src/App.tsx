import { FC } from 'react';

import Router from './router';
import Header from './shared/ui/Header';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
};

export default App;
