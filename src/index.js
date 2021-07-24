import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyProfile from './MyProfile'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



export default function App() {
  return (
    <Router>
    <div className="App">
     <div className="navigation">
      <nav>
          <ul className="list">
           <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-profile">My Profile</Link>
          </li>
          </ul>
        </nav>
      </div>
      <Switch>
          <Route path="/" exact component ={Home}/>
          <Route path="/my-profile" component={MyProfile}/>
          
        </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to my first React Router Exercise</h2>
    
  </div>
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

