import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users';
import User from './pages/User/User';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import NotFound from './pages/NotFound/NotFound';
import { AuthContextProvider } from './providers/AuthContextProvider';

function App() {

  return (
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user' element={<User />} />
          <Route path='/events' element={<Events />} />
          <Route path='/event' element={<Event />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
  );
}

export default App
