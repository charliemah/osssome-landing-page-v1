import osssomeLogo from '/osssome-2.png'
import './App.css'

function App() {

  return (
    <>
      <img src={osssomeLogo} className="logo" alt="Osssome logo" />
      <div className="title">
        <h1 className="highlight">Coming Soon</h1>
        <h2>The Topcoder for</h2>
        <h2>        
          <span className="highlight">Open Source&nbsp;</span>
          Software Challenges
        </h2>
      </div>
      <div className="tagline">
        <h3 className="highlight">We help awesome talents and companies</h3>
        <h3>work on most important things first.</h3>
      </div>
    </>
  )
}

export default App
