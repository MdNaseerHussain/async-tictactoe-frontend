import "./Board.css";
import BlankLogo from "../BlankLogo.svg";
import Ologo from "../Ologo.svg";
import Xlogo from "../Xlogo.svg";

function Board({ board }) {
  return (
    <table id="board">
      <tbody>
        <tr>
          <td>
            {board[0][0] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[0][0] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td>
            {board[0][1] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[0][1] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td>
            {board[0][2] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[0][2] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
        </tr>
        <tr>
          <td>
            {board[1][0] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[1][0] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td>
            {board[1][1] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[1][1] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td>
            {board[1][2] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[1][2] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
        </tr>
        <tr>
          <td>
            {board[2][0] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[2][0] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td>
            {board[2][1] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[2][1] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td>
            {board[2][2] === "X" ? (
              <img src={Xlogo} alt="X" />
            ) : board[2][2] === "O" ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Board;
