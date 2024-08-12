import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage';
import UserDashboardPage from './pages/UserDashboardPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  const userRole = 'admin'; // This should come from your authentication logic

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" render={() => (
          userRole === 'admin' ? <AdminDashboardPage /> : <Redirect to="/user" />
        )} />
        <Route path="/user" render={() => (
          userRole === 'user' ? <UserDashboardPage /> : <Redirect to="/admin" />
        )} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
