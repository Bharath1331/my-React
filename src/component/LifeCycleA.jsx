import React from 'react'

class LifeCycle extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'BC'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    render(){
        console.log('LifeCycleA render')
        return(
            <div>
                <h1>RENDER</h1>
            </div>
        )
    }
    
}

export default LifeCycle