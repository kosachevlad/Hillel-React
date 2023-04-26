import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { setPlayerName, setPlayerImage, resetPlayer } from '../redux/battle/battle.action';

const Battle = () => {
  const dispatch = useDispatch();
  const playersData = useSelector((state) => state.resultsReducer);

  const handleSubmit = (e, id, username) => {
    e.preventDefault();
    dispatch(setPlayerName(id, username));
    dispatch(
      setPlayerImage(
        id,
        `https://github.com/${username}.png?size=200`
      )
    );
  };

  const handleReset = (id) => {
    dispatch(resetPlayer(id));
  };

  return (
    <div>
      <div className="row">
        {!playersData.playerOneImage ? (
          <PlayerInput
            id="playerOne"
            label="Player 1"
            onSubmit={handleSubmit}
          />
        ) : (
          <PlayerPreview
            avatar={playersData.playerOneImage}
            userName={playersData.playerOneName}
          >
            <button
              className="reset"
              onClick={() => handleReset('playerOne')}
            >
              Reset
            </button>
          </PlayerPreview>
        )}
        {!playersData.playerTwoImage ? (
          <PlayerInput
            id="playerTwo"
            label="Player 2"
            onSubmit={handleSubmit}
          />
        ) : (
          <PlayerPreview
            avatar={playersData.playerTwoImage}
            userName={playersData.playerTwoName}
          >
            <button
              className="reset"
              onClick={() => handleReset('playerTwo')}
            >
              Reset
            </button>
          </PlayerPreview>
        )}
      </div>
      {playersData.playerOneImage && playersData.playerTwoImage ? (
        <Link
          className="button"
          to={{
            pathname: 'results',
            search: `?playerOneName=${playersData.playerOneName}&playerTwoName=${playersData.playerTwoName}`
          }}
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
