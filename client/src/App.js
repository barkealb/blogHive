import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {useContext} from 'react';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import Auth from './controllers/Auth';
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
import Profile from './controllers/Profile';
import Public from './controllers/Public';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './context/UserProvider';

function App() {
  const { token } = useContext(UserContext)
  return (
    <div className="App">
      <Navigator/>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />
`       <Route 
          path='/signin'
          element= {token ? <Navigate to='/public'/> : <Auth/>}
        />
        <Route
          path='/profile'
          element={<ProtectedRoute token={token} redirectTo= '/'><Profile/></ProtectedRoute>}
        />
        <Route
          path='/public'
          element={<ProtectedRoute token={token} redirectTo= '/'><Public/></ProtectedRoute>}
        />
        <Route
          path='/blogs/:id'
          element={<BlogDetails/>}
          />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
