import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './root-reducer';

const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() // TODO Vil dette feile hvis bruker ikke har plugin?
);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
    ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
