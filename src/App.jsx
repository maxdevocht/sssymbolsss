import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Coder from './components/Coder'
import Decoder from './components/Decoder'
import About from './components/About'
import Who from './components/Who'
import data from '../data'
import './App.css'

export default function App() {

  const cards = data.map(item => {
    return (
      <Who 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Header />
      <Coder />
      <Decoder />
      <About />
      <section className="section--who">
        <div className="who--title">WHO</div>
        <div className="cards">
          {cards}          
        </div>
      </section>
      <p className="copyright"><i class="ri-copyright-fill"></i> 2024 Max de Vocht. All Rights Reserved</p>
    </>
  )
}
