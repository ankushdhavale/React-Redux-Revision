import {BrowserRouter, Route, Routes} from 'react-router-dom'
import User from './Components/User'
import Nav from './Components/Nav.Jsx'
import UserList from './components/UserList'
import Product from './components/Product'
function App() {
  return (
   <div className="App">
      <BrowserRouter>
        <Nav/>
        <div>
          <Routes>
            <Route path='/' element={<User/>}/>
            <Route path='/user-list' element={<UserList/>}/>
            <Route path='/product-page' element={<Product/>}/>
            {/* <Route path='/product-list' element={<Product/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>
   </div>
  )
}

export default App
