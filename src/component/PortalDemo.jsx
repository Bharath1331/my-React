import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalDemo extends Component {
  render() {

    return ReactDOM.createPortal (
      <div>
        This is rendered using a portal.
      </div>,
      document.getElementById("portal-root")
    )
    
  }
}

export default PortalDemo


// function PortalDemo() {
//   return ReactDOM.createPortal(
//     <div>
//       Portal Root
//     </div>,
//     document.getElementById('portal-root')
//   )
// }

// export default PortalDemo
