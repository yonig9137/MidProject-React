import React from 'react'

import Posts from './Posts'
import Todos from './Todos'

function UserDetailes() {
    return (
        <div className="UserDetailes">
            <Todos/>
            <Posts/>
        </div>
    )
}

export default UserDetailes
