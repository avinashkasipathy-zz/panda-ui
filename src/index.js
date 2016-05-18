import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'


import config from './config'

import { fetchData } from './actions'

import GridComponent from './gridcomponent'

var store = config();

store.pandastore.dispatch({
  "type": "GET_PANDAS",
  "testing": "just get around this"
});

window.pandastore = store.pandastore;

fetchData(store.pandastore.dispatch);

render(
  <Provider store={store.pandastore}>
    <div>
      <GridComponent />
    </div>
  </Provider>, 
  document.getElementById('panda-ui')
)