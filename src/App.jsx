import {BrowserRouter, Route, Routes} from 'react-router-dom'
import User from './Components/User'
import Nav from './Components/Nav.Jsx'
import UserList from './components/UserList'
function App() {
  return (
   <div className="App">
      <BrowserRouter>
        <Nav/>
        <div>
          <Routes>
            <Route path='/' element={<User/>}/>
            <Route path='/user-list' element={<UserList/>}/>
          </Routes>
        </div>
      </BrowserRouter>
   </div>
  )
}

export default App
