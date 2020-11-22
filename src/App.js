import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path={'/:page'} component={Header} />
        <Route exact path={'/'} component={Header} />

        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    </div>
  );
}

export default App;
