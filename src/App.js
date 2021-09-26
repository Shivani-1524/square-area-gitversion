import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SquareArea from './screens/SquareArea';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SquareArea} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
