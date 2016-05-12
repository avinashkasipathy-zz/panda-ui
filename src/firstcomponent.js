import React from 'react'
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

export default FirstComponents