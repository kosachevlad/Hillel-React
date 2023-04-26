export const setFirstPlayer = (player) => ({
    type: 'SET_FIRST_PLAYER',
    payload: player,
  });
  
  export const setSecondPlayer = (player) => ({
    type: 'SET_SECOND_PLAYER',
    payload: player,
  });
  
  export const setFirstPlayerScore = (score) => ({
    type: 'SET_FIRST_PLAYER_SCORE',
    payload: score,
  });
  
  export const setSecondPlayerScore = (score) => ({
    type: 'SET_SECOND_PLAYER_SCORE',
    payload: score,
  });
  
  export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error,
  });
  
  export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    payload: loading,
  });

  export const setPlayerName = (id, username) => ({
    type: 'SET_PLAYER_NAME',
    payload: {
    id,
    username,
    },
    });
    
    export const setPlayerImage = (id, image) => ({
    type: 'SET_PLAYER_IMAGE',
    payload: {
    id,
    image,
    },
    });
    
    export const resetPlayer = (id) => ({
    type: 'RESET_PLAYER',
    payload: {
    id,
    },
    });