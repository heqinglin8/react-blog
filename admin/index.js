import React from 'react';
import Login from './Login/index'

// ref https://stackoverflow.com/questions/46482433/reactjs-createclass-is-not-a-function
class AdminApp extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/' component={Calendar}/>
      </Switch>
    );
  }
}

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <p>登陆后</p>
      </div>
    );
  }
};

export default AdminApp;

