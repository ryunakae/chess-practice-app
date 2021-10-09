import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChessKing,
  faChessQueen,
  faChessBishop,
  faChessKnight,
  faChessRook,
  faChessPawn,
} from '@fortawesome/free-solid-svg-icons';

const Board = () => {
  return (
    <>
      <table className="chess-board">
        <tr>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessRook}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessKnight}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessBishop}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessKing}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessQueen}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessBishop}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessKnight}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessRook}
            />
          </td>
        </tr>
        <tr>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessPawn}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessPawn}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessPawn}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessPawn}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessPawn}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessPawn}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessPawn}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__white"
              icon={faChessPawn}
            />
          </td>
        </tr>
        <tr>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
        </tr>
        <tr>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
        </tr>
        <tr>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
        </tr>
        <tr>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
          <td className="square__dark-brown"></td>
          <td className="square__light-brown"></td>
        </tr>
        <tr>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessPawn}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessPawn}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessPawn}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessPawn}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessPawn}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessPawn}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessPawn}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessPawn}
            />
          </td>
        </tr>
        <tr>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessRook}
            />
          </td>
          <td className="square__light-brown">
            {' '}
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessKnight}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessBishop}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessKing}
            />
          </td>
          <td className="square__dark-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessQueen}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessBishop}
            />
          </td>
          <td className="square__dark-brown">
            {' '}
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessKnight}
            />
          </td>
          <td className="square__light-brown">
            <FontAwesomeIcon
              className="chess-piece__black"
              icon={faChessRook}
            />
          </td>
        </tr>
      </table>
    </>
  );
};

export default Board;
