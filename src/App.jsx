import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';


const App = () => {
  return(
    <BrowserRouter>
      <header>
        Header
      </header>
      <Routes>
        <Route path='posts' element={<Posts/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <footer>
        footer
      </footer>
    </BrowserRouter>
  )
}

export default App;