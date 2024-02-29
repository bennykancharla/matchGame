import './index.css'

const Header = props => {
  const {score, timeInSec} = props
  //   console.log(score)
  return (
    <nav className="header-container">
      <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="header-score-timer-container">
        <li>
          <p className="score">
            Score: <span className="span-score">{score}</span>
          </p>
        </li>
        <li className="header-timer-container">
          <img
            className="timer-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="timer">{timeInSec} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
