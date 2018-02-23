import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


const fakeAuth = {
    isAuthenticated: false,
    login(cb) {
        this.isAuthenticated = true;
        setTimeout(cb,2000)
    },
    logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb,2000)
    }
}

const Home = () => (
    <h1>Home Page</h1>
)
const About = () => (
    <h1>About Page</h1>
)
const Dashboard = ({history}) => (
    <div>
       <h1>Dashboard Page(user only)</h1>
       <button onClick={ ()=> {
           fakeAuth.logout(()=> history.push('/'))
       }}>Logout</button>
    </div>
    
)

const Login = ({history}) => (
    <div>
        Login 
        <button onClick={() => {
            fakeAuth.login(() => history.push('/dashboard'))

        }}>Login</button>
    </div>
)

// Protected Route
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
//
const App = () => (
    <div>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <Route path="/" exact component= {Home}></Route>
                <Route path="/about" exact component= {About}></Route>
                <PrivateRoute path="/dashboard" exact component= {Dashboard}></PrivateRoute>
                <Route path="/login" exact component= {Login}></Route>
            </div>
        </Router>
    </div>
)

render(<App/>, document.getElementById('app'))