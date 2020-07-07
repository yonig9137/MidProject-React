import React from 'react'
import {Switch, Route} from 'react-router-dom'

import  './Detailes.css'

import NewUser from './NewUser'
import Empty from './Empty'


function Detailes() {
    return (
        <div className="Detailes">
            <Switch>
                <Route exact  path="/" component={Empty} />
                <Route  path="/NewUser" component={NewUser} />
                {/* <Route  path="/stage3" component={Stage3} />
                <Route  path="/stage4" component={Stage4} /> */}
            </Switch>
        </div>
    )
}

export default Detailes
