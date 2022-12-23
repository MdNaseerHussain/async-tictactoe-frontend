import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Board from "../components/Board";
import Button from "../components/Button";
import "../index.css";
import BackArrow from "../arrow_back_ios.svg";
import Xlogo from "../Xlogo.svg";
import io from "socket.io-client";
import { SERVER_ROUTE } from "../utils";

function Play() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { id: gameId } = useParams();
  const [turn, setTurn] = useState(false);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const socket = io.connect(SERVER_ROUTE, {
      auth: { token },
    });
    return () => {
      socket.disconnect();
    };
  }, [token]);

  return (
    <div>
      <img
        src={BackArrow}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate("/games")}
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
