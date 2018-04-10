import React from 'react'

export class GreeterForm extends React.Component {
  onButtonClick (e) {
    e.preventDefault()
    const updates = {}
    const name = this.name.value
    const message = this.message.value

    if (name.length > 0) {
      this.name.value = ''
      updates.name = name
    }
    if (message.length > 0) {
      this.message.value = ''
      updates.message = message
    }
    this.props.onNewData(updates)
  }

  render () {
    return (
      <form onSubmit={this.onButtonClick.bind(this)} >
        <div>
          <input type='text' ref={ref => this.name = ref} placeholder='Enter name' />
        </div>
        <div>
          <textarea ref={ref => this.message = ref} placeholder='Enter message..' />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}
