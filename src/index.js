import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'


import config from './config'

import { fetchData } from './actions'


// import FirstComponents from './firstcomponent'
// import SecondComponents from './secondcomponent'
import GridComponent from './gridcomponent'

fetchData()

var store = config();

render(
  <Provider store={store.pandastore}>
    <div>
      <GridComponent />
    </div>
  </Provider>, 
  document.getElementById('panda-ui')
)