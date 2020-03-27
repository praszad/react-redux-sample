import React from 'react';
import Counter from './app/Counter/Counter';
import { store } from './store';
import Buttons from './app/Buttons';

function App(props) {
  return (
    <React.Fragment>
      <Counter count={store.getState().count} />
      <Buttons counts={[10, 25, 100]} />
    </React.Fragment>
  );
}

export default App;
