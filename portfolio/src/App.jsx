import Header from './Components/Header'
import Hero from './Components/Hero'
import Quote from './Components/Quote'
import {projects} from './Data/Projects'
import Project from "./Components/Project/Project";
// import './App.css'

export default function App() {
  return (
    <>
        <Header />
        <main>
          <Hero />
          <Quote />
          <Project projects={projects} />
        </main>
    </>
  )
}

