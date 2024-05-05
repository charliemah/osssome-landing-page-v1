import osssomeLogo from '/osssome-2.png'
import osomeWeekendLogo from '/osomeweekend.png'
import './App.css'

function App() {

  return (
    <>
      <div className="hero">
        <h1 className="highlight">Coming Soon</h1>
        <br/>
        <br/>
        <a href="https://osomeweekend.super.site" target="_blank">
          <img src={osomeWeekendLogo} className="logo1" alt="OsomeWeekend logo" />
        </a>
        <h2>
          The first&nbsp;
          <span className="highlight">all-in-one&nbsp;</span>
          platform for&nbsp;
          <span className="highlight">Startup Weekend&nbsp;</span>
          events
        </h2>
        <br/>
        <br/>
        <div className="demo">
          <a href="https://osomeweekend.super.site/" target="_blank">
            <button id="counter" type="button">
              See the Demo
            </button>
          </a>
        </div>
        <br/>
      </div>
      <div className="company">
        <img src={osssomeLogo} className="logo2" alt="Osssome logo" />
        <h3>We help awesome people</h3>
        <h3>address very important challenges!</h3>
      </div>
    </>
  )
}

export default App
