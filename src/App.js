import './App.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom'
import Home from './pages/home/Home'
import Signup from './pages/account/Signup'
import Login from './pages/account/Login'
import About from './pages/about/About'
import ManageHabits from './pages/habits/ManageHabits'
import LogHabits from './pages/habits/LogHabits'
import Spending from './pages/spending/Spending'
import Navbar from './navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/managehabits' element={<ManageHabits />} />
        <Route path='/loghabits' element={<LogHabits />} />
        <Route path='/spending' element={<Spending />} />
      </Routes>
    </Router>
  );
}

export default App;
