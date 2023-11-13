import './App.css';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Categories from './Components/Categories/Categories';
import ToDos from './Components/ToDos/ToDos';
import Login from './Components/Auth/Login';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';
import AuthProvider from './Contexts/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Components/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
          <div className="pageContainer">
            <Routes>
                <Route path='/Categories' element={<ProtectedRoute><Categories/></ProtectedRoute>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/ToDos' element={<ProtectedRoute><ToDos/></ProtectedRoute>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
          </div>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
