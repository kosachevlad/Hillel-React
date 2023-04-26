import { battle } from "../../api";
import {
  setFirstPlayer,
  setSecondPlayer,
  setFirstPlayerScore,
  setSecondPlayerScore,
  setLoading,
  setError,
} from "./battle.action";

export const fetchBattleData = (params) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    battle([params.get('playerOneName'), params.get('playerTwoName')])
      .then((data) => {
        dispatch(setFirstPlayer(data[0].profile));
        dispatch(setSecondPlayer(data[1].profile));
        dispatch(setFirstPlayerScore(data[0].score));
        dispatch(setSecondPlayerScore(data[1].score));
      })
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)));
  };
};