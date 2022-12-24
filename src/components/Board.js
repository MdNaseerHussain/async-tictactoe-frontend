import "./Board.css";
import BlankLogo from "../BlankLogo.svg";
import Ologo from "../Ologo.svg";
import Xlogo from "../Xlogo.svg";

function Board({ board, handleClick, user, opponent }) {
  return (
    <table id="board">
      <tbody>
        <tr>
          <td onClick={() => handleClick(0, 0)}>
            {board[0][0] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[0][0] === opponent ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td onClick={() => handleClick(0, 1)}>
            {board[0][1] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[0][1] === opponent ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td onClick={() => handleClick(0, 2)}>
            {board[0][2] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[0][2] === opponent ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
        </tr>
        <tr>
          <td onClick={() => handleClick(1, 0)}>
            {board[1][0] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[1][0] === opponent ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td onClick={() => handleClick(1, 1)}>
            {board[1][1] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[1][1] === opponent ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td onClick={() => handleClick(1, 2)}>
            {board[1][2] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[1][2] === opponent ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
        </tr>
        <tr>
          <td onClick={() => handleClick(2, 0)}>
            {board[2][0] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[2][0] === opponent ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td onClick={() => handleClick(2, 1)}>
            {board[2][1] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[2][1] === opponent ? (
              <img src={Ologo} alt="O" />
            ) : (
              <img src={BlankLogo} alt="" />
            )}
          </td>
          <td onClick={() => handleClick(2, 2)}>
            {board[2][2] === user ? (
              <img src={Xlogo} alt="X" />
            ) : board[2][2] === opponent ? (
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
