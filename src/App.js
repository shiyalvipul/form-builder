import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import BuildForm from './components/BuildForm' ;
import FormLists  from './components/FormLists/FormLists';
import FormData from './components/FormData/FormData'

function App() {
  return (
    <Router>
        <NavigationBar />
        <Route exact path="/" component={BuildForm} />
        <Route path="/form-list" component={FormLists} />
        <Route path="/form/:slug" component={FormData} />
    </Router>
  );
}

export default App;
