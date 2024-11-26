import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appname from './components/Appname'
import AddTodo from './components/AddTodo'
import {Camera, CameraIcon} from 'lucide-react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <center>
      <Camera/>
      <Appname/>
    <AddTodo/>
    </center>
    </>
  )
}

export default App
