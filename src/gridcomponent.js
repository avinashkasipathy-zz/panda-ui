import React from 'react'
import { fetchData } from './actions'
import { connect } from 'react-redux'

class GridComponent extends React.Component {
  render() {
    return (
      <div> Grid Component {this.props.testing}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    testing: JSON.stringify(state.testing)
  }
}

export default connect(mapStateToProps)(GridComponent)