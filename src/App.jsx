import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [data, setData] = useState("welcome to gmail processor");

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data');
      setData(response.data.message);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <div  className='bg-blue-500 text-white p-4  text-center '>
        <h1 className='text-3xl font-bold '>Welcome to Gmail Processor</h1>
        <button className='bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow mt-1' onClick={handleLogin}>
          Login with Google</button>
      </div>
      <div  className='p-4 text-center'>
        <h2 className='text-2xl font-semibold mb-2'>Process Your Emails Efficiently</h2>
        <p className='text-gray-700'>{data}</p>
      </div>
    </>
  )
}

export default App
