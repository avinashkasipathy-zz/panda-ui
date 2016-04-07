import React from 'react'
import ReactDOM from 'react-dom'
import SecondComponents from './secondcomponent'
import Button from 'slds-for-react/button'

class FirstComponents extends React.Component {
  constructor(props) {
    super(props)
    this.render = this.render.bind(this)
    this.state = {
      children: null
    }
  }

  render() {
    return (
      <div>
          <Button text="Fucking Awesome" className="slds-button" theme="neutral" />
      </div>
    )
  }
}

ReactDOM.render(<FirstComponents />, document.getElementById('panda-ui'))