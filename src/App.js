import React, {useEffect, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/Sidebar';
import {NavigationBar} from "./components/NavigationBar";
import MainPage from "./Home";
import ClientPage from "./ClientPage";
import GadgetPage from "./GadgetPage";


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/chip_page" component={ClientPage} />
          <Route path="/gadget_page" component={GadgetPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
