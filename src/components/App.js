
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import IssueLicenseContainer from "../pages/IssueLicenseContainer"
import ExpiredLicensesContainer from "../pages/ExpiredLicensesContainer";
import AddHolder from '../pages/AddHolder';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/issueLicense" component={IssueLicenseContainer} />
            <Route exact path="/registerUser" component={AddHolder} />
            <Route exact path="/expiredLicenses" component={ExpiredLicensesContainer} />
        </Switch>
    </BrowserRouter>
)

export default App;
