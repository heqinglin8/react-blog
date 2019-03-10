import React from 'react';
import Login from './Login/index'
import PrivateRoute from '../components/PrivateRoute'

// ref https://stackoverflow.com/questions/46482433/reactjs-createclass-is-not-a-function
class AdminApp extends React.Component {
  render() {

    // return (
    //   <Calendar/>
    // );

    return (
      <Switch>
        {/* <PrivateRoute path='/' component={Calendar}/> */}
        <Route exact path='/' component={Calendar}/>
        {/* <Route path='/login' component={Login}/> */}
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

