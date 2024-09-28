import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {DndContext} from '@dnd-kit/core'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  return (
    <div className='App'>
      <h1>My Tasks</h1>
      <DndContext collisionDetection={closestCorners}>

      </DndContext>
    </div>
  )
}

export default App
