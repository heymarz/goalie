import 'bootstrap/dist/css/bootstrap.min.css';
import {DataProvider} from './DataContext';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuNav from './components/MenuNav'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage'
import Onboarding from './components/Onboarding';

function App() {
  return (
    <DataProvider>
      <Router>
        <MenuNav 
        />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home />
              } 
            />
              <Route 
              path="/onboarding"
              element={<Onboarding />}
              />
            <Route 
              path="/signup" 
              element={
                <SignupForm />
              } 
            />
            <Route
            path="/login"
            element={ <LoginForm />}
            />
            
            <Route 
              path="*" 
              element={<ErrorPage />} 
            />
          </Routes>
        </main>
    </Router>
  </DataProvider>
  );
}

export default App;
