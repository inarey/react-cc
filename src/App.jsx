import { useState } from 'react'
import './App.css'
import Employee from './components/Employee'

function App() {
  const [role, setRole] = useState('dev')
  const showEmployee = true

  return (
    <div className="bg-pink-500">
      {showEmployee ? (
        <>
          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value)
          }} />
          <Employee name='Caleb' role='teacher' />
          <Employee name='Abby' role='designer' />
          <Employee name='John' role={role} />
        </>
      ) : (
          'You are not allowed to see the employees'
      )}
    </div>
  )
}

export default App
