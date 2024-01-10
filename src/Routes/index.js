import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Scheduling from '../Pages/Scheduling';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/scheduling" component={Scheduling}/>
        <Route path="/" component={Dashboard} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  )
}

