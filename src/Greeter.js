import React from 'react'
import {GreeterMessage} from './GreeterMessage'
import {GreeterForm} from './GreeterForm'

export class Greeter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.name,
      message: props.message
    }
    this.handleNewData = this.handleNewData.bind(this)
  }

  handleNewData (updates) {
    this.setState(updates)
  }

  render () {
    const { name, message } = this.state
    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    )
  }
}

Greeter.defaultProps = {
  name: 'React',
  message: 'This is a default message'
}
