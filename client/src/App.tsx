import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users';
import User from './pages/User/User';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user' element={<User />} />
        <Route path='/events' element={<Events />} />
        <Route path='/event' element={<Event />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
