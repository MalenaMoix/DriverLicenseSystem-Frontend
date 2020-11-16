import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import IssueLicenceContainer from "../pages/IssueLicenceContainer"
import RegisterUserContainer from "../pages/RegisterUserContainer"

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/issueLicence" component={IssueLicenceContainer} />
            <Route exact path="/registerUser" component={RegisterUserContainer} />
            
        </Switch>
    </BrowserRouter>
)

export default App