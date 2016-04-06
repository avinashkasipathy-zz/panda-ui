import React from 'react'
import ReactDOM from 'react-dom'
import SecondComponents from './secondcomponent'
import Button from 'slds-for-react/button'

class FirstComponents extends React.Component {
  constructor(props) {
    super(props)
    this.render = this.render.bind(this)
    this.onClickFoo = this.onClickFoo.bind(this)
    this.onClickBuzz = this.onClickBuzz.bind(this)

    this.state = {
      children: null
    }
  }

  onClickFoo () {
    var child = (<div key="childFoo"> I am child Foo </div>)
    this.setState({
      children: child
    })

  }

  onClickBuzz () {
    var child = (<div key="childbuzz"> I am child Buzz </div>)
    this.setState({
      children: child
    })
  }

  render() {
    return (
      <div>
          <Button text="Fucking Awesome" theme="neutral" />
      </div>
    )
  }
}

ReactDOM.render(<FirstComponents />, document.getElementById('panda-ui'))