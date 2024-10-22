import './App.css'
import Header from './components/header/Header'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Review from './pages/review/Review'
import Skill from './pages/skill/Skill'
import Work from './pages/work/Work'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skill/>
        <Work/>
        <Review/>
      </main>
    </>
  )
}

export default App
