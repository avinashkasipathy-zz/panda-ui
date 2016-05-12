import React from 'react'
import { fetchData } from './actions'

class GridComponent extends React.Component {
  render() {
    console.log("Avi");
    console.log(fetchData());
    return (
      <div> Grid Component </div>
    )
  }
}

export default GridComponent