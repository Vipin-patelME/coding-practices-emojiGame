// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="nav-bar">
      <div className="emoji-logo-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="nav-para">Emoji Game</h1>
      </div>
      <div className="nav-para-cont">
        <p className="nav-para">score: {score}</p>
        <p className="nav-para">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
