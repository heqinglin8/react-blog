import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AdminApp from './src/admin/index'
import './src/assets/css/app.css';
import { Provider} from 'mobx-react';
import store from './src/admin/store'

// ref https://stackoverflow.com/questions/46482433/reactjs-createclass-is-not-a-function
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
          Logged in as Jane
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/app" component={Dashboard}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="*" component={Dashboard}/>
          </Switch>
        </main>
      </div>
    );
  }
}

class Admin extends React.Component {
  render() {
    return (
      <div>
        <p>Admin</p>
      </div>
    );
  }
};

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <p>Dashboard</p>
      </div>
    );
  }
};

class Inbox extends React.Component {
  render() {
    return (
      <div>
        <p>Inbox</p>
      </div>
    );
  }
};

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <p>Calendar</p>
      </div>
    );
  }
};

// ref https://segmentfault.com/q/1010000009616045/a-1020000009618728
render((
  <BrowserRouter>
  <Provider {...store}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={AdminApp} />
      {/* <Route path="/admin" component={Admin} /> */}
    </Switch>
    </Provider>
     {/* <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={AdminApp} />
    </Switch> */}
  </BrowserRouter>
), document.querySelector('#app'));
