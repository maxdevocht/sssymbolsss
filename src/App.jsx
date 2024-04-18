import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Coder from './components/Coder'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Coder />
    </>
  )
}
