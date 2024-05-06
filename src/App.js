import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CreateChallengePage from './pages/CreateChallengePage';

import MainBar from './components/MainBar';
import RequireAuth from './components/RequiresAuth';

import { Box } from '@mui/material';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/create-challenge',
    name: 'Create Challenge',
    component: CreateChallengePage,
  }
];

function App() {
  function navigateToPath(path) {

  }

  return (
    <div className="App">
      <BrowserRouter>
        <MainBar routes={routes}/>
        <Box sx={{
          paddingTop: '64px'
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-challenge" element={
              <RequireAuth>
                <CreateChallengePage />
              </RequireAuth>
            } />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
