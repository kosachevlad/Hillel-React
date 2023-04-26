const initialState = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null,
    firstPlayer: {},
    secondPlayer: {},
    firstPlayerScore: null,
    secondPlayerScore: null,
    error: null,
    loading: false,
  };
  
  export const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FIRST_PLAYER':
        return {
          ...state,
          firstPlayer: action.payload,
        };
      case 'SET_SECOND_PLAYER':
        return {
          ...state,
          secondPlayer: action.payload,
        };
      case 'SET_FIRST_PLAYER_SCORE':
        return {
          ...state,
          firstPlayerScore: action.payload,
        };
      case 'SET_SECOND_PLAYER_SCORE':
        return {
          ...state,
          secondPlayerScore: action.payload,
        };
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload,
        };
      case 'SET_PLAYER_NAME':
        return {
          ...state,
          [`${action.payload.id}Name`]: action.payload.username,
        };
      case 'SET_PLAYER_IMAGE':
        return {
          ...state,
          [`${action.payload.id}Image`]: action.payload.image,
        };
      case 'RESET_PLAYER':
        return {
          ...state,
          [`${action.payload.id}Name`]: '',
          [`${action.payload.id}Image`]: null,
        };
      default:
        return state;
    }
  };
  