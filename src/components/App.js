import { Route, Router } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './Header';
import Home from './Home';
import History from '../History';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import AddEmployee from './AddEmployee';
import ResetPassword from './ResetPassword';
import AddAsset from './AddAsset';
import AssetAllocation from './AssetAllocation';
import ListEmployee from './ListEmployee';
import ListAsset from './ListAssets';
import AllocationListing from './AllocationListing';
const App = () => {
  return (
    <div>
      <Router history={History}>
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/AddEmployee" component={AddEmployee} />
        <Route path="/EditEmployee/:id" component={AddEmployee} />
        <Route path="/EditAsset:id" component={AddAsset} />
        <Route path="/AddAsset" component={AddAsset} />
        <Route path="/AssetAllocation" component={AssetAllocation} />
        <Route path="/AllocationListing" exact component={AllocationListing} />
        <Route path="/ListEmployee" component={ListEmployee} />
        <Route path="/ListAsset" component={ListAsset} />
        <Route path="/ResetPassword" component={ResetPassword} />
      </Router>
    </div>
  );
};
export default App;
