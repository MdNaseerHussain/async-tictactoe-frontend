import { useNavigate } from "react-router-dom";
import Board from "../components/Board";
import Button from "../components/Button";
import "../index.css";
import BackArrow from "../arrow_back_ios.svg";
import Xlogo from "../Xlogo.svg";

function Play() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={BackArrow}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate('/games')}
      />
      <p className="title title-game">Game with Naseer</p>
      <p className="piece">Your Piece</p>
      <img src={Xlogo} alt="X" className="piece-logo" />
      <p className="board-label">Your Move</p>
      <Board />
      <div className="btn-wrapper">
        <Button text="Submit" styling="btn" />
      </div>
    </div>
  );
}

export default Play;
