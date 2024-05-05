import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';

import MainBar from './components/MainBar';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
];

function App() {
  return (
    <div className="App">
      <MainBar />
      <BrowserRouter>
        {routes.map((route) => {
          return <route.component key={route.path}/>;
        })}
      </BrowserRouter>
    </div>
  );
}

export default App;
