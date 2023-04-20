import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../api";
import Preloader from "../Popular/Preloader";
import PlayerPreview from "./PlayerPreview";

const Results = () => {
  const location = useLocation();
  const [firstPlayer, setFirstPlayer] = useState({});
  const [secondPlayer, setSecondPlayer] = useState({});
  const [firstPlayerScore, setFirstPlayerScore] = useState(null);
  const [secondPlayerScore, setSecondPlayerScore] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setLoading(true);
    battle([params.get('playerOneName'), params.get('playerTwoName')])
      .then((data) => {
        setFirstPlayer(data[0].profile);
        setSecondPlayer(data[1].profile);
        setFirstPlayerScore(data[0].score);
        setSecondPlayerScore(data[1].score);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [location.search]);

  if (error) {
    return "Error";
  }

  const handleRestart = () => {
    window.location.href = '/battle';
  };
  return (
    <>
      {loading && (
        <div className="preloader-container">
          <Preloader />
        </div>
      )}
      {!loading && (
        <>
          <div className="row">
            <PlayerPreview 
                avatar={firstPlayer.avatar_url}
                userName={firstPlayer.login}
            >
            <div className="winner">
              <p>Score: {firstPlayerScore}</p>
              <p>Name: {firstPlayer.name || 'Name not specified'}</p>
              <p>Location: {firstPlayer.location || 'Location not specified'}</p>
              <p>Company: {firstPlayer.company || 'Company not specified'}</p>
              <p>Followers: {firstPlayer.followers}</p>
              <p>Following: {firstPlayer.following}</p>
              <p>Public repos: {firstPlayer.public_repos}</p>
              <p>Blog: {firstPlayer.blog || 'Does not have a blog'}</p>
              <h2 className="battle-results">Winner</h2>
            </div>
            </PlayerPreview>
                
            <PlayerPreview
                avatar={secondPlayer.avatar_url}
                userName={secondPlayer.login}
            >
            <div className="loser">
              <p>Score: {secondPlayerScore}</p>
              <p>Name: {secondPlayer.name || 'Name not specified'}</p>
              <p>Location: {secondPlayer.location || 'Location not specified'}</p>
              <p>Company: {secondPlayer.company || 'Company not specified'}</p>
              <p>Followers: {secondPlayer.followers}</p>
              <p>Following: {secondPlayer.following}</p>
              <p>Public repos: {secondPlayer.public_repos}</p>
              <p>Blog: {secondPlayer.blog || 'Does not have a blog'}</p>
              <h2 className="battle-results">Loser</h2>
            </div>
            </PlayerPreview>
          </div>
          <div className="btn-container">
            <button className="button" onClick={handleRestart}>
              Restart
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Results;



