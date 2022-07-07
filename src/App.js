import './App.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom'
import Home from './pages/home/Home'
import Signup from './pages/account/Signup'
import Login from './pages/account/Login'
import About from './pages/about/About'
import Habits from './pages/habits/Habits'
import Expenses from './pages/expenses/Expenses'
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
        <Route path='/habits' element={<Habits />} />
        <Route path='/expenses' element={<Expenses />} />
      </Routes>
    </Router>
  );
}

export default App;
