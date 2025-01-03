// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Title from "./Title.jsx"

function Description(){
  return <h3>Learning React</h3>
}

function App() {
  return (
  <div>
    <Title/>
    <Description/>
  </div>
  );
}

export default App
