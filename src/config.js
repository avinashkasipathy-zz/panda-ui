import { createStore } from 'redux'

import firstReducer from './store/firstreducer'


export default function(){

  var pandastore = createStore(firstReducer, {})

  return { pandastore }
}