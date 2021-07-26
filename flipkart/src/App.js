import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line no-unused-vars
  Link
} from "react-router-dom";

// style
import './App.css';
import './components/style/utils.css';
import './components/style/nav.css';
import './components/style/footer.css';


// JavaScripts
import './components/scripts/split.js';

// Components
import Navigation from './components/nav';
import Footer from './components/footer';
import Content from './components/content';
import NotFound from './components/notfound';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navigation />
      {/* Main Content */}
      <Router>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      {/* Main Content */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
