import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import IssueLicenseContainer from "../pages/IssueLicenseContainer"
import RegisterUserContainer from "../pages/RegisterUserContainer"
import ExpiredLicensesContainer from "../pages/ExpiredLicensesContainer";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/issueLicense" component={IssueLicenseContainer} />
            <Route exact path="/registerUser" component={RegisterUserContainer} />
            <Route exact path="/expiredLicenses" component={ExpiredLicensesContainer} />
        </Switch>
    </BrowserRouter>
)

export default App