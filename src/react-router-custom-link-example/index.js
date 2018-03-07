import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';


const CustomLink = ({ label,to, activeOnlyWhenExact }) => (
    <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
)

const Home = () => (<h1>Home Page</h1>)
const About = () => (<h1>About Page</h1>)
const App = () => (
    <Router>
        <div>
            <h1>Sample App</h1>
            <nav>
                <CustomLink label="Home" to="/" activeOnlyWhenExact={ true }>Home</CustomLink>
                <CustomLink label="About" to="/about" activeOnlyWhenExact={ true }>About</CustomLink>
            </nav>
            <main>
                <Route path="/" exact component={ Home } />
                <Route path="/about" exact component={ About } />
            </main>
        </div>
    </Router>
    
)

render(<App/>, document.getElementById('app'))