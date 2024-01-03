import React, {UseContext} from 'react'
import { UserContext, ChannelContext } from '../App'

const user = UseContext(UserContext)
const channel = UseContext(ChannelContext)

function ComponentA() {
  return (
    <div>
    {/* <UserContext.Consumer>
      {
        user =>  <div>Hello {user} </div>
      }
    </UserContext.Consumer>   */}
    Hello {user} and {channel}
    </div>
    )
}

export default ComponentA;
