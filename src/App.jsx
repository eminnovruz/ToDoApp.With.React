import { useContext } from 'react'
import './App.css'
import Login from './login/Login'
import Mainpage from './mainpage/Mainpage'
import Context from './mainpage/ContextWrapper'

function App() {
  const {authorized} = useContext(Context);

  return authorized? <Mainpage/> : <Login/>
}

export default App
