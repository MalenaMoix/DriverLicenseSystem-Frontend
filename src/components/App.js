import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import IssueLicenseContainer from "../pages/IssueLicenseContainer"
import RegisterUserContainer from "../pages/RegisterUserContainer"

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/issueLicense" component={IssueLicenseContainer} />
            <Route exact path="/registerUser" component={RegisterUserContainer} />
            
        </Switch>
    </BrowserRouter>
)

export default App