import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }

    focusInput(){
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.InputRef} />
      </div>
    )
  }
}

export default Input
