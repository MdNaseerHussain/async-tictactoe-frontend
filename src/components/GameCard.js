import Button from "./Button";
import "./GameCard.css";

function GameCard() {
  return (
    <div className="card">
      <p className="card-title">Game with Naseer</p>
      <p className="card-status">Tanmay just made their move! It’s your turn to play now.</p>
      <p className="card-time">9th June 2022, 3:15pm</p>
      <Button text="Play!" styling="btn btn-game" />
    </div>
  )
}

export default GameCard