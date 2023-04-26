import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Popular/Preloader";
import PlayerPreview from "./PlayerPreview";
import { fetchBattleData } from "../redux/battle/battle.thunk";

const Results = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    firstPlayer,
    secondPlayer,
    firstPlayerScore,
    secondPlayerScore,
    error,
    loading
  } = useSelector((state) => state.resultsReducer);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    dispatch(fetchBattleData(params));
  }, [location.search]);

  if (error) {
    return <div>Error</div>;
  }

  const handleRestart = () => {
    window.location.href = "/battle";
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



