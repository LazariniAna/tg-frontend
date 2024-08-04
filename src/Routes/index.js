import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import Scheduling from '../Pages/Scheduling';
import Layout from '../Components/Layout';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/scheduling" component={Scheduling} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
          <Redirect to={'/'} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

