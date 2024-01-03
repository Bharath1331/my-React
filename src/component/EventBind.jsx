import React from 'react'

class EventBind extends React.Component {
    constructor(props) 
    {
        super(props)

        this.state = {
            message: 'Hello, world!'
        }

        //bind() 
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Hello, React!'
        })
    }

    render() {
        return (
            <div>
                <div >{this.state.message} </div>
                <button onClick={this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default EventBind
