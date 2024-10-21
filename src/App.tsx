import './App.css'
import Header from './components/header/Header'
import About from './pages/about/About'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
      </main>
    </>
  )
}

export default App
