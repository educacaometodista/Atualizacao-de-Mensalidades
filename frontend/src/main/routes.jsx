import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Clients from '../clients/clients'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path ='/clients' component={Clients} />
        <Redirect from='*' to='/' />
    </Router>
)