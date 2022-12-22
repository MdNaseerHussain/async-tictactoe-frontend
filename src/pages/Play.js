import { useNavigate } from "react-router-dom";
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
  const socket = io.connect(SERVER_ROUTE, {
    auth: { token },
  });

  socket.on("connect", () => {
    console.log("Connected to server on games page");
  });
  socket.emit("play page");

  return (
    <div>
      <img
        src={BackArrow}
        alt="Back"
        className="back-arrow"
        onClick={() => {
          socket.disconnect();
          navigate("/games");
        }}
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
