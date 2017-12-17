import * as React from 'react';
import { Provider } from 'react-redux';

import HomePageContainer from './components/homePage/HomePage';

const App = ({ store }: { store: any }) => (
  <Provider store={store}>
    <div>
      <HomePageContainer />
    </div>
  </Provider>
);

export default App;
