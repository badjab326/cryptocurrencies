// Styles
import './App.css';
// Page Components
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
// UI components
import Nav from './components/Nav'
// Component Libraries
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
      <Route path="/price/:symbol" render={(renderProps) => {
        return <Price {...renderProps} />
      }} />
    </div>
  );
}

export default App;
