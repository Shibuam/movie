import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login'
import MovieList from './Pages/MovieList';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path ='/movie_list' element={<MovieList/>}/>
  </Routes>
</Router>
    </div>
  );
}

export default App;
