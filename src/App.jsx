import { useState } from 'react'
import './App.css'
import Employee from './components/Employee'

function App() {
  const [role, setRole] = useState('dev')
  const showEmployee = true

  return (
    <div className='bg-teal-500'>
      {showEmployee ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className='flex flex-wrap justify-center'>
            <Employee
              name='Caleb'
              role='teacher'
              img='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg'
            />
            <Employee
              name='Abby'
              role='designer'
              img='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg'
            />
            <Employee
              name='John'
              role={role}
              img='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg'
            />
            <Employee
              name='Caleb'
              role='teacher'
              img='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg'
            />
            <Employee
              name='Abby'
              role='designer'
              img='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg'
            />
            <Employee
              name='John'
              role={role}
              img='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg'
            />
          </div>
        </>
      ) : (
        'You are not allowed to see the employees'
      )}
    </div>
  );
}

export default App
